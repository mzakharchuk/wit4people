import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonTitle } from "../components/TitleIcon";

const result = [
  {
    id: 1,
    name: "Michał Kowalski",
    title: 'Chcę zagrać rolę w serialu "Barwy Szczęścia"',
  },
  {
    id: 2,
    name: "Magdalena Polak",
    title: "Chcę zagrać rolę w filmie wojennym",
  },
  {
    id: 3,
    name: "Katarzyna Wrona",
    title: "Chcę zagrać w spektaklu dla dzieci w teatrze",
  },
  {
    id: 4,
    name: "Michał Kowalski",
    title: ' Chcę zagrać rolę w serialu "Barwy Szczęścia"',
  },
];

class DatabaseDreamsResultScreen extends React.Component {
  render() {
    return (
      <View>
        {result.map((item) => (
          <ButtonTitle
            key={item.id}
            title={item.title}
            name={item.name}
            onPress={() =>
              this.props.navigation.navigate("Marzenie", { id: item.id })
            }
          />
        ))}
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps)(DatabaseDreamsResultScreen);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E9E9E9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    margin: 5,
  },
  name: { paddingTop: 5, fontSize: 15 },
  title: { paddingTop: 5, fontSize: 19, width: "68%", marginRight: 10 },
});
