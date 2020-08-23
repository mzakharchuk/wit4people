import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  CheckBox,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Panel from "../components/Panel.js";
import { Root } from "native-base";

export default class Volunteer extends React.Component {
  state = {
    isSelectedTel: true,
    isSelectedUmowa: false,
    isSelectedUTVP: false,
  };

  setSelectionTel = () => {
    this.setState({ isSelectedTel: !this.state.isSelectedTel });
  };
  setSelectionUTVP = () => {
    this.setState({ isSelectedUTVP: !this.state.isSelectedUTVP });
  };
  setSelectionUmowa = () => {
    this.setState({ isSelectedUmowa: !this.state.isSelectedUmowa });
  };

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
      <ScrollView style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcons
            name="account-circle"
            size={150}
            style={{ color: "#ffac88" }}
          />
          <View style={{ paddingLeft: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>Michal Kowalski</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 10,
              }}
            >
              <Text>Status:</Text>
              <Text>Aktywny</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>Oddział:</Text>
              <Text>Kraków</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 10,
              }}
            >
              <Text>Koordynator:</Text>
              <Text>Marcin w</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>w FMM od:</Text>
              <Text>stycznia 2018</Text>
            </View>
          </View>
        </View>
        <View elevation={6} style={styles.contactPanel}>
          <View
            style={{
              paddingBottom: 5,
              flexDirection: "row",
              justifyContent: "space-around",
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

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>
                Hej! Preferuję kontakt tel. między 17-22, ponieważ w ciągu dnia
                nie mam możliwości odebrania telefonu:(
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Panel title="O mnie" expanded={true}>
            <Text>
              Michał marzy o tym aby móc zagrać rolę w jego ulubionym serialu
              Barwy szczęścia. Ogląda serial, odkąd tylko pojawił się na antenie
              telewizji TVP, czyli już dobre kilka lat.
            </Text>
          </Panel>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <Panel title="Marzenia w trakcie realizacji" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={this.state.isSelectedTel}
                  onValueChange={this.setSelectionTel}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>
                  Wykonać telefon to Aystenta ds. Planu Filmowego kiedy rusza
                  plan zdjęciowy
                </Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={this.state.isSelectedUmowa}
                  onValueChange={this.setSelectionUmowa}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>
                  Zapytać o datę podpisania umowy
                </Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={this.state.isSelectedUTVP}
                  onValueChange={this.setSelectionUTVP}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>
                  Potwierdzić datę podpisania umowy z TVP z mamą Michała
                </Text>
              </View>
            </View>
          </Panel>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Panel title="Marzenia zrealizowane" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <Text>Notes</Text>
            </View>
          </Panel>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: "#fff" },
  labelType: {
    backgroundColor: "green",
    color: "white",
    marginRight: 5,
    marginBottom: 2,
    padding: 3,
    alignContent: "center",
    borderRadius: 20,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 8,
    flexWrap: "wrap",
  },
  checkboxContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  labelContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    flexGrow: 1,
    flex: 1,
  },
  title: {
    fontStyle: "italic",
    flex: 1,
    fontSize: 16,
    color: "green",
    flexWrap: "wrap",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  contactPanel: {
    marginTop: 10,
    backgroundColor: "#E9E9E9",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#EFEFEF",
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.15,
  },
});
