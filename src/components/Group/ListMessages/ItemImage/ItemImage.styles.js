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
      paddingVertical: 6,
      paddingHorizontal: 10,
    },
    identity: {
      color: "#fff",
      marginBottom: 5,
      fontWeight: "bold",
      opacity: 0.4,
    },
    image: {
      borderRadius: 10,
      //   height: 100,
      //   width: "100%",
    },
    date: {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "#fff",
      fontSize: 12,
      marginTop: 2,
      textAlign: "right",
    },
  });
};
