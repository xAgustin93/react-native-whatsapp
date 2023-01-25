import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { IconButton, CloseIcon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../api";
import { useAuth } from "../../hooks";
import { CreateGrupo, Search } from "../../components/Group";

const userController = new User();

export function CreateGroupScreen() {
  const navigation = useNavigation();
  const { accessToken } = useAuth();
  const [users, setUsers] = useState(null);
  const [usersResult, setUsersResult] = useState(null);
  const [step, setStep] = useState(1);
  const [usersId, setUsersId] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          icon={<CloseIcon />}
          padding={0}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [step]);

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getAll(accessToken);
        setUsers(response);
        setUsersResult(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const nextStep = () => setStep((prevState) => prevState + 1);

  if (!usersResult) return null;

  return (
    <View>
      {step === 1 && (
        <>
          <Search data={users} setData={setUsersResult} />
          <CreateGrupo.ListUser
            users={usersResult}
            nextStep={nextStep}
            setUsersId={setUsersId}
          />
        </>
      )}
      {step === 2 && <CreateGrupo.Form usersId={usersId} />}
    </View>
  );
}
