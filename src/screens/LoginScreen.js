import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { signIn } from "../_action/userToken";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 75 }}>
        <View style={{ paddingBottom: 30 }}>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center" }}
          >
            Moje konto
          </Text>
        </View>
        <View style={{ marginRight: 25, marginLeft: 25, paddingBottom: 30 }}>
          <Text style={{ fontSize: 12, color: "#1C86BB" }}>Login</Text>
          <TextInput
            style={{
              borderBottomColor: "#E4E4E4",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View style={{ marginRight: 25, marginLeft: 25, paddingBottom: 30 }}>
          <Text style={{ fontSize: 12, color: "#1C86BB" }}>Haslo</Text>
          <TextInput
            secureTextEntry={true}
            style={{
              borderBottomColor: "#E4E4E4",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.signIn();
            // this.props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.text}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signIn: () => {
      dispatch(signIn());
    },
  };
}
export default connect(null, mapDispatchToProps)(LoginScreen);

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
