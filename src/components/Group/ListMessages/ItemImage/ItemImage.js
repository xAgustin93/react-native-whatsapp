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

  const imageUri = `${ENV.BASE_PATH}/${message.message}`;

  const onOpenImage = () => {
    navigation.navigate(screens.global.imageFullScreen, { uri: imageUri });
  };

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        {!isMe && (
          <Text style={styles.identity}>
            {message.user.firstname || message.user.lastname
              ? `${message.user.firstname || ""} ${message.user.lastname || ""}`
              : message.user.email}
          </Text>
        )}
        <Pressable onPress={onOpenImage}>
          <AutoHeightImage
            width={270}
            maxHeight={400}
            source={{ uri: imageUri }}
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
