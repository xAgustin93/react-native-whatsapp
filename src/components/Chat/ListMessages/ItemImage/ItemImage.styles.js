import { StyleSheet } from "react-native";

export const styled = (isMe) => {
  return new StyleSheet.create({
    content: {
      flexDirection: "row",
      justifyContent: isMe ? "flex-end" : "flex-start",
      marginHorizontal: 10,
      marginBottom: 10,
    },
    message: {
      backgroundColor: isMe ? "#0891b2" : "#202333",
      maxWidth: "80%",
      borderRadius: 10,
      padding: 3,
      overflow: "hidden",
    },
    image: {
      borderRadius: 10,
    },
    date: {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "#fff",
      fontSize: 12,
    },
  });
};
