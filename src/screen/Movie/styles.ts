import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    height: screenHeight * 0.65,
    paddingTop: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 20,
  },
  matchText: {
    color: "#77de7b",
    fontWeight: "bold",
    fontSize: 13,
    paddingRight: 10,
  },
  infoText: {
    color: "white",
    fontSize: 13,
    marginRight: 5,
  },
  textButton: {
    backgroundColor: "rgba(250, 250, 250, 0.3)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
    marginHorizontal: 20,
  },
  castScrollView: {
    paddingLeft: 20,
  },
  actorContainer: {
    alignItems: "center",
    marginRight: 20,
  },
  actorIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  actorName: {
    color: "white",
    marginTop: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
