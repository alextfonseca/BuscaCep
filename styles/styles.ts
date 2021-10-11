import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  header: {
    backgroundColor: "#0d5c46",

    paddingTop: 30,
    padding: 20,

    height: 250,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoText: {
    color: "#fff",
    fontSize: 24,
  },


  inputContainer:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 60
  },

  input:{
    backgroundColor: '#f4f4f4',
    width: "80%",
    padding: 10,

    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },

  button:{
    backgroundColor: '#f1573b',
    padding: 15,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },

  resultContainer:{
    width: "100%",
    padding: 20,
  },

  result:{
    width: "100%",
    flexDirection: "row",

    justifyContent: "space-around",
  },

  resultCard:{
    backgroundColor: '#0d5c46',

    alignItems: "center",
    height: 180,
    width: 150,

    marginTop: 20,
    padding: 10,

    borderRadius: 10
  },

  resultTitle:{
    color: '#fabe50',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  resultText:{
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center'
  },

  buttonMap:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',

    width: "100%",
    backgroundColor: '#fabe50',

    marginTop: 20,
    borderRadius: 10,
    padding: 13,
  },

  buttonMapText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
