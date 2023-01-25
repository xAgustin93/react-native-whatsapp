import { Actionsheet, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { GroupMessage } from "../../../../../api";
import { imageExpoFormat } from "../../../../../utils";
import { styles } from "../SendMedia.styles";

const groupMessageController = new GroupMessage();

export function GalleryOption(props) {
  const { onClose, groupId, accessToken } = props;

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      sendImage(result.assets[0].uri);
    }
  };

  const sendImage = async (uri) => {
    try {
      const file = imageExpoFormat(uri);
      await groupMessageController.sendImage(accessToken, groupId, file);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Actionsheet.Item
      style={[styles.option, styles.optionEnd]}
      _text={styles.optionText}
      onPress={openGallery}
      startIcon={
        <Icon
          as={MaterialCommunityIcons}
          size="6"
          name="image"
          color="primary.500"
        />
      }
    >
      Galeria
    </Actionsheet.Item>
  );
}
