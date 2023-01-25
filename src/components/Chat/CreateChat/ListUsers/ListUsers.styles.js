import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    marginBottom: 50,
    paddingBottom: 50,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
  },
  email: {
    color: "#fff",
    opacity: 0.6,
    marginTop: 2,
  },
});
