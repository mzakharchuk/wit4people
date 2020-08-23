import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  CheckBox,
  ScrollView,
  Text,
  View,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Panel from "../components/Panel.js";

import { TitleIcon } from "../components/TitleIcon";
import { CheckboxWithTitle } from "../components/CheckboxWithTitle";

import { getDreamer } from "../_action/dreamers";

class Marzenie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedTel: true,
      isSelectedUmowa: false,
      isSelectedUTVP: false,
    };
  }
  componentDidMount() {
    // this.props
    //   .getDreamType()
    //   .then(() => {})
    //   .catch((err) => console.log(err));
  }

  setSelectionTel = () => {
    this.setState({ isSelectedTel: !this.state.isSelectedTel });
  };
  setSelectionUTVP = () => {
    this.setState({ isSelectedUTVP: !this.state.isSelectedUTVP });
  };
  setSelectionUmowa = () => {
    this.setState({ isSelectedUmowa: !this.state.isSelectedUmowa });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcons
            name="account-circle"
            size={150}
            style={{ color: "#ffac88" }}
          />
          <View style={{ paddingLeft: 10 }}>
            <View
              style={{
                width: "80%",
                flexGrow: 1,
                flex: 1,
              }}
            >
              <Text style={styles.title}>
                Chcę zagrać rolę w serialu Barwy Szczęścia
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>Marzyciel:</Text>
              <Text>Michal Kowalski</Text>
            </View>
            <View style={styles.labelContainer}>
              {this.props.labels.map((item) => (
                <View style={styles.labelType}>
                  <Text style={{ margin: 3, color: "white" }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "column" }}>
          <View style={{ flexDirection: "row", paddingBottom: 5 }}>
            <Text>Status: </Text>
            <Text style={{ color: "green" }}>W trakcie spełniania </Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 5 }}>
            <Text>Pilne: </Text>
            <Text>Nie</Text>
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 5 }}>
            <Text>Sponsor: </Text>
            <Text>TAK</Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", paddingBottom: 5 }}>
            <Text>Oddział: </Text>
            <Text>Kraków </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Koordynator: </Text>
            <Text>Marcin Potocki</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Panel title="O marzeniu" expanded={true}>
            <Text>
              Michał marzy o tym aby móc zagrać rolę w jego ulubionym serialu
              Barwy szczęścia. Ogląda serial, odkąd tylko pojawił się na antenie
              telewizji TVP, czyli już dobre kilka lat.
            </Text>
          </Panel>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Panel title="Wolontariusze przypisani do tego marzenia">
            <View style={styles.containerVolunteer}>
              {this.props.voluntiers.map((item) => (
                <TitleIcon key={item.id} title={item.name} />
              ))}
            </View>
          </Panel>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <Panel title="Etapy realizacji" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <CheckboxWithTitle
                title="Wykonać telefon to Aystenta ds. Planu Filmowego kiedy rusza plan zdjęciowy"
                value={this.state.isSelectedTel}
                onChange={this.setSelectionTel}
              />
              <CheckboxWithTitle
                title="Zapytać o datę podpisania umowy"
                value={this.state.isSelectedUmowa}
                onChange={this.setSelectionUmowa}
              />
              <CheckboxWithTitle
                title="Potwierdzić datę podpisania umowy z TVP z mamą Michała"
                value={this.state.isSelectedUTVP}
                onChange={this.setSelectionUTVP}
              />
            </View>
          </Panel>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <Panel title="Sponsor" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <Text style={styles.label}>
                Oszacowana kwota potrzebna do realizacji marzenia to 3600,00 zł
              </Text>
              <Text style={styles.label}>
                To marzenie zostanie spełnione dzięki wsparciu:
              </Text>
              <Text style={styles.label}>
                1. Sizeer 3600/3600 <Text style={{ color: "green" }}>100%</Text>
              </Text>
            </View>
          </Panel>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <Panel title="Dokumenty/Zdjecia" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <Text>Dokumenty/Zdjecia</Text>
            </View>
          </Panel>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <Panel title="Notatki" expanded={false}>
            <View style={{ paddingLeft: 15, backgroundColor: "#ccc" }}>
              <Text>Notes</Text>
            </View>
          </Panel>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state, props) => {
  // console.log("Marzenie props:", props.route.params.id);
  return {
    labels: ["Zostan kimś", "Aktor", "Telewizja", "Serial"],
    voluntiers: [
      { id: 1, name: "Magda K" },
      { id: 2, name: "Piotrek T" },
      { id: 3, name: "Ania K" },
    ],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDreamer: (id) => dispatch(getDreamer(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Marzenie);

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
  containerVolunteer: {
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#ccc",
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
});
