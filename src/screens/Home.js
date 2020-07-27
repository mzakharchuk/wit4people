import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

class Home extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        {this.props.dreamers.map((item) => (
          <TouchableHighlight
            key={item.id}
            onPress={() =>
              this.props.navigation.navigate("Marzenie", { id: item.id })
            }
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <SimpleLineIcons
                name="user-female"
                size={94}
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

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
  },
});
