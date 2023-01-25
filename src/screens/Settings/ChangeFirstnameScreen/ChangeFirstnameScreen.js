import { View } from "react-native";
import { Input, Button } from "native-base";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./ChangeFirstnameScreen.form";
import { styles } from "./ChangeFirstnameScreen.styles";

const userController = new User();

export function ChangeFirstnameScreen() {
  const navigation = useNavigation();
  const { accessToken, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const dataUser = { firstname: formValue.firstname };
        await userController.updateUser(accessToken, dataUser);
        updateUser("firstname", formValue.firstname);
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre"
        variant="unstyled"
        autoFocus
        value={formik.values.firstname}
        onChangeText={(text) => formik.setFieldValue("firstname", text)}
        style={[styles.input, formik.errors.firstname && styles.inputError]}
      />
      <Button
        style={styles.btn}
        onPress={formik.handleSubmit}
        isLoading={formik.isLoading}
      >
        Cambiar
      </Button>
    </View>
  );
}
