import React from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Panel from "../components/Panel";
import { CheckboxWithTitle } from "../components/CheckboxWithTitle";

class DatabaseDreamsScreen extends React.Component {
  state = {
    isDisabledReset: true,
    isFromOldDream: false,
    isFromNewDream: false,
    isFrom3to5years: false,
    isFrom6to8years: false,
    isFrom9to11years: false,
    isFrom12to14years: false,
    isFrom15to18years: false,
    isNewToVerification: false,
    isAcceptRealization: false,
    isInRealization: false,
    isRealization: false,

    isFemale: false,
    isMale: false,
    isUrgently: false,
    isNotUrgently: false,
    isSponsor100: false,
    isSponsorPart: false,
    isNotSponsor: false,
  };

  onchangeCheckbox = (name, value) => {
    this.setState({ [name]: !value });
  };
  submitSearch = () => {
    this.setState({ isDisabledReset: false });
  };
  resetHandler = () => {
    this.setState({ isDisabledReset: true });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Sortuj */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Sortuj">
            <CheckboxWithTitle
              title="od najstarszego marzenia"
              value={this.state.isFromOldDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromOldDream",
                  this.state.isFromOldDream
                )
              }
            />
            <CheckboxWithTitle
              title="od najnowszego marzenia"
              value={this.state.isFromNewDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromNewDream",
                  this.state.isFromNewDream
                )
              }
            />
          </Panel>
        </View>
        {/* Wiek */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Wiek" isTitleCenter>
            <CheckboxWithTitle
              title="3-5 lat"
              value={this.state.isFrom3to5years}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFrom3to5years",
                  this.state.isFrom3to5years
                )
              }
            />
            <CheckboxWithTitle
              title="6-8 lat"
              value={this.state.isFrom6to8years}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFrom6to8years",
                  this.state.isFrom6to8years
                )
              }
            />
            <CheckboxWithTitle
              title="9-11 lat"
              value={this.state.isFrom9to11years}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFrom9to11years",
                  this.state.isFrom9to11years
                )
              }
            />

            <CheckboxWithTitle
              title="12-14 lat"
              value={this.state.isFrom12to14years}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFrom12to14years",
                  this.state.isFrom12to14years
                )
              }
            />

            <CheckboxWithTitle
              title="15-18 lat"
              value={this.state.isFrom15to18years}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFrom15to18years",
                  this.state.isFrom15to18years
                )
              }
            />
          </Panel>
        </View>

        {/* Status marzenia */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Status marzenia">
            <CheckboxWithTitle
              title="Nowe do weryfikacji"
              value={this.state.isNewToVerification}
              onChange={() =>
                this.onchangeCheckbox(
                  "isNewToVerification",
                  this.state.isNewToVerification
                )
              }
            />
            <CheckboxWithTitle
              title="Zatwierdzone do realizacji"
              value={this.state.isAcceptRealization}
              onChange={() =>
                this.onchangeCheckbox(
                  "isAcceptRealization",
                  this.state.isAcceptRealization
                )
              }
            />

            <CheckboxWithTitle
              title="W trakcie realizacji"
              value={this.state.isInRealization}
              onChange={() =>
                this.onchangeCheckbox(
                  "isInRealization",
                  this.state.isInRealization
                )
              }
            />
            <CheckboxWithTitle
              title="Zrealizowane"
              value={this.state.isRealization}
              onChange={() =>
                this.onchangeCheckbox("isRealization", this.state.isRealization)
              }
            />
          </Panel>
        </View>

        {/* Oddział */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Oddział">
            <CheckboxWithTitle
              title="Nowe do weryfikacji"
              value={this.state.isNewToVerification}
              onChange={() =>
                this.onchangeCheckbox(
                  "isNewToVerification",
                  this.state.isNewToVerification
                )
              }
            />
            <CheckboxWithTitle
              title="Zatwierdzone do realizacji"
              value={this.state.isAcceptRealization}
              onChange={() =>
                this.onchangeCheckbox(
                  "isAcceptRealization",
                  this.state.isAcceptRealization
                )
              }
            />

            <CheckboxWithTitle
              title="W trakcie realizacji"
              value={this.state.isInRealization}
              onChange={() =>
                this.onchangeCheckbox(
                  "isInRealization",
                  this.state.isInRealization
                )
              }
            />
            <CheckboxWithTitle
              title="Zrealizowane"
              value={this.state.isRealization}
              onChange={() =>
                this.onchangeCheckbox("isRealization", this.state.isRealization)
              }
            />
          </Panel>
        </View>

        {/* Kategoria */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Kategoria">
            <CheckboxWithTitle
              title="od najstarszego marzenia"
              value={this.state.isFromOldDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromOldDream",
                  this.state.isFromOldDream
                )
              }
            />
            <CheckboxWithTitle
              title="od najnowszego marzenia"
              value={this.state.isFromNewDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromNewDream",
                  this.state.isFromNewDream
                )
              }
            />
          </Panel>
        </View>

        {/* Podkategoria */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Podkategoria">
            <CheckboxWithTitle
              title="od najstarszego marzenia"
              value={this.state.isFromOldDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromOldDream",
                  this.state.isFromOldDream
                )
              }
            />
            <CheckboxWithTitle
              title="od najnowszego marzenia"
              value={this.state.isFromNewDream}
              onChange={() =>
                this.onchangeCheckbox(
                  "isFromNewDream",
                  this.state.isFromNewDream
                )
              }
            />
          </Panel>
        </View>

        {/* Płeć */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Płeć">
            <CheckboxWithTitle
              title="kobieta"
              value={this.state.isFemale}
              onChange={() =>
                this.onchangeCheckbox("isFemale", this.state.isFemale)
              }
            />
            <CheckboxWithTitle
              title="mężczyzna"
              value={this.state.isMale}
              onChange={() =>
                this.onchangeCheckbox("isMale", this.state.isMale)
              }
            />
          </Panel>
        </View>

        {/* Pilne */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Pilne">
            <CheckboxWithTitle
              title="Tak"
              value={this.state.isUrgently}
              onChange={() =>
                this.onchangeCheckbox("isUrgently", this.state.isUrgently)
              }
            />
            <CheckboxWithTitle
              title="Nie"
              value={this.state.isNotUrgently}
              onChange={() =>
                this.onchangeCheckbox("isNotUrgently", this.state.isNotUrgently)
              }
            />
          </Panel>
        </View>

        {/* Sponsor */}
        <View style={{ paddingTop: 10 }}>
          <Panel title="Sponsor">
            <CheckboxWithTitle
              title="TAK - 100%"
              value={this.state.isSponsor100}
              onChange={() =>
                this.onchangeCheckbox("isSponsor100", this.state.isSponsor100)
              }
            />
            <CheckboxWithTitle
              title="TAK - FINANSOWANIE CZĘŚCIOWE"
              value={this.state.isSponsorPart}
              onChange={() =>
                this.onchangeCheckbox("isSponsorPart", this.state.isSponsorPart)
              }
            />
            <CheckboxWithTitle
              title="NIE"
              value={this.state.isNotSponsor}
              onChange={() =>
                this.onchangeCheckbox("isNotSponsor", this.state.isNotSponsor)
              }
            />
          </Panel>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, width: "100%", paddingRight: 5 }}>
            <TouchableOpacity
              style={styles.submit}
              onPress={this.submitSearch}
              underlayColor={"transparent"}
            >
              <Text style={styles.submitText}>POKAŻ WYNIKI</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, width: "100%", paddingLeft: 5 }}>
            <TouchableOpacity
              disabled={this.state.isDisabledReset}
              style={
                this.state.isDisabledReset
                  ? styles.submitDeactive
                  : styles.submit
              }
              onPress={this.resetHandler}
              underlayColor={"transparent"}
            >
              <Text style={styles.submitText}>WYCZYŚĆ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, prosp) => {
  return {};
};
export default connect(mapStateToProps)(DatabaseDreamsScreen);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: "#fff" },
  label: {
    margin: 8,
  },
  submit: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#79E888",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#79E888",
    paddingRight: 10,
    paddingLeft: 10,
  },
  submitDeactive: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#79E888",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#79E888",
    paddingRight: 10,
    paddingLeft: 10,
    opacity: 0.6,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
  buttonLight: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
  },
  fixToText: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
