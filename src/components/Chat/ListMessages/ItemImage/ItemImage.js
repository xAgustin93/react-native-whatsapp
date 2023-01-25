import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
import AutoHeightImage from "react-native-auto-height-image";
import { useAuth } from "../../../../hooks";
import { ENV, screens } from "../../../../utils";
import { styled } from "./ItemImage.styles";

export function ItemImage(props) {
  const { message } = props;
  const { user } = useAuth();
  const isMe = user._id === message.user._id;
  const styles = styled(isMe);
  const createMessage = new Date(message.createdAt);
  const navigation = useNavigation();

  const imageUrl = `${ENV.BASE_PATH}/${message.message}`;

  const onOpenImage = () => {
    navigation.navigate(screens.global.imageFullScreen, { uri: imageUrl });
  };

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Pressable onPress={onOpenImage}>
          <AutoHeightImage
            width={300}
            maxHeight={400}
            source={{ uri: imageUrl }}
            style={styles.image}
          />
        </Pressable>
        <Text style={styles.date}>
          {DateTime.fromISO(createMessage.toISOString()).toFormat("HH:mm")}
        </Text>
      </View>
    </View>
  );
}
