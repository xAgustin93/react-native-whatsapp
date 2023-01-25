import { View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export function ImageFullScreen() {
  const { params } = useRoute();

  return (
    <View>
      <Image
        source={{ uri: params.uri }}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
}
