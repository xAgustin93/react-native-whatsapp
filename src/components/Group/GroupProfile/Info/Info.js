import { View, Text, Pressable } from "react-native";
import { Avatar, InfoIcon } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Group } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { ENV, imageExpoFormat, screens } from "../../../../utils";
import { styles } from "./Info.styles";

const groupController = new Group();

export function Info(props) {
  const { group, setGroup } = props;
  const { accessToken } = useAuth();
  const navigation = useNavigation();

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      updateImage(result.assets[0].uri);
    }
  };

  const updateImage = async (uri) => {
    try {
      const file = imageExpoFormat(uri);
      const response = await groupController.update(accessToken, group._id, {
        file,
      });

      setGroup({ ...group, image: response.image });
    } catch (error) {
      console.error(error);
    }
  };

  const openChangeNameGroup = () => {
    navigation.navigate(screens.global.changeNameGroupScreen, {
      groupId: group._id,
      groupName: group.name,
    });
  };

  return (
    <View style={styles.content}>
      <Pressable onPress={openGallery}>
        <Avatar
          bg="cyan.500"
          size="xl"
          source={{ uri: `${ENV.BASE_PATH}/${group.image}` }}
        />
      </Pressable>

      <Text style={styles.name} onPress={openChangeNameGroup}>
        {group.name} <InfoIcon />
      </Text>
      <Text style={styles.type}>Grupo</Text>
    </View>
  );
}
