import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  container: {
    position: "relative",
  },
  photo: {
    height: "100%",
    width: "100%",
  },
  topActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    padding: 10,
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    bottom: 50,
    left: 0,
    padding: 10,
  },
  icon: {
    color: "#fff",
  },
});
