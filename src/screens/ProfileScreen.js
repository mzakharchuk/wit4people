import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import Panel from "../components/Panel.js";

class ProfileScreen extends React.Component {
  dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  sendEmailHandler = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  render() {
    const phoneNumber = "457 928 385";
    const email = "magda.k@gmail.com";
    return (
      <View>
        <View style={styles.containerLogo}>
          <View
            style={{
              backgroundColor: "#79E888",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="account-circle"
              size={120}
              style={{ color: "#fff" }}
            />
            <Text style={{ color: "#fff", fontSize: 16 }}>Magda K</Text>
            <Text style={{ color: "#fff" }}>wolontariusz | Kraków</Text>
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              Status: Aktywny
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderColor: "#ccc",
            borderWidth: 1,
            shadowColor: "#ccc",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                this.dialCall(phoneNumber);
              }}
            >
              <MaterialIcons
                name="call"
                size={36}
                style={{ color: "#79E888" }}
              />
            </TouchableOpacity>
            <Text>{phoneNumber}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.sendEmailHandler(email)}>
              <FontAwesome
                name="envelope-o"
                size={36}
                style={{ color: "#000" }}
              />
            </TouchableOpacity>
            <Text>{email}</Text>
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Panel title="O mie">
            <Text>
              Michał marzy o tym aby móc zagrać rolę w jego ulubionym serialu
              Barwy szczęścia. Ogląda serial, odkąd tylko pojawił się na antenie
              telewizji TVP, czyli już dobre kilka lat.
            </Text>
          </Panel>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Panel title="Marzenia w trakcie">
            <Text>loading..</Text>
          </Panel>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Panel title="Marzenia spełnione">
            <Text>loading..</Text>
          </Panel>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Panel title="Moje pliki">
            <Text>loading..</Text>
          </Panel>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Panel title="Moje notatki">
            <Text>loading..</Text>
          </Panel>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {};
};
export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
  containerLogo: { height: 200, backgroundColor: "#79E888" },
});
