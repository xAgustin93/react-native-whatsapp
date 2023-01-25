import { useRef } from "react";
import { ScrollView } from "react-native";
import { View } from "native-base";
import { map } from "lodash";
import { ItemText } from "./ItemText";
import { ItemImage } from "./ItemImage";
import { styles } from "./ListMessages.styles";

export function ListMessages(props) {
  const { messages } = props;
  const scrollViewRef = useRef();

  return (
    <ScrollView
      style={styles.container}
      alwaysBounceVertical={false}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }}
    >
      <View style={styles.content}>
        {map(messages, (message) => {
          if (message.type === "TEXT") {
            return <ItemText key={message._id} message={message} />;
          }
          if (message.type === "IMAGE") {
            return <ItemImage key={message._id} message={message} />;
          }
        })}
      </View>
    </ScrollView>
  );
}
