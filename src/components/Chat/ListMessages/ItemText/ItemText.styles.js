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
      flex: 1,
      backgroundColor: isMe ? "#0891b2" : "#202333",
      maxWidth: "80%",
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 10,
    },
    text: {
      color: "#fff",
      fontSize: 16,
    },
    date: {
      opacity: 0.6,
      color: "#fff",
      fontSize: 12,
      marginTop: 2,
      textAlign: "right",
    },
  });
};
