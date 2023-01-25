import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  content: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: "#171717",
    borderTopWidth: 1,
    borderTopColor: "#333",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    position: "relative",
  },
  input: {
    backgroundColor: "#29292b",
    color: "#fff",
    fontSize: 16,
    borderRadius: 50,
    marginLeft: 15,
  },
  iconSend: {
    position: "absolute",
    top: 0,
    right: 10,
    height: "100%",
  },
});
