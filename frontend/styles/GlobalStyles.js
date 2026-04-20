import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "purple",
    marginBottom: 20
  },

  text: {
    fontSize: 18,
    marginBottom: 10
  },

  button: {
    backgroundColor: "grey",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: "#fff",
    fontSize: 16
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginTop: 5
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "100%"
  },

  icon: {
    fontSize: 20,
    marginRight: 8
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10
  },

  /* ✅ NEW — profile screen card & text */

  card: {
    width: "90%",
    backgroundColor: "lightgrey",
    padding: 15,
    borderRadius: 12,
    marginVertical: 20
  },

  label: {
    fontSize: 14,
    marginTop: 8,
    color: "black",
    fontWeight: "bold"
  },

  liveTitle: {
    marginTop: 12,
    fontWeight: "bold"
  },

  liveText: {
    marginTop: 4
  }

});