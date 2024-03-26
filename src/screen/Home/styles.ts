import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    justifyContent: "space-between",
    height: screenHeight * 0.65,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
    marginHorizontal: 20,
  },
  list: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: 120,
    height: 180,
    marginHorizontal: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  textButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
