import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <View style={{ paddingTop: 125, paddingBottom: 50 }}>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 40 }}>
          Cześć!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Zaloguj się</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Przejrzyj Marzenia jako gość</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#79E888",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#79E888",
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
