import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

class VolunteersScreen extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        {this.props.dreamers.map((item) => (
          <TouchableHighlight
            key={item.id}
            onPress={() =>
              this.props.navigation.navigate("Volunteer", { id: item.id })
            }
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialIcons
                name="account-circle"
                size={94}
                style={{ color: "#79E888" }}
              />
              <View style={{ paddingLeft: 10 }}>
                <View
                  style={{
                    width: "80%",
                    flexGrow: 1,
                    flex: 1,
                  }}
                >
                  <Text style={{ paddingTop: 5 }}>
                    {item.firstName + " " + item.lastName}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    dreamers: state.dreamers,
  };
};

export default connect(mapStateToProps)(VolunteersScreen);

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
  },
});
