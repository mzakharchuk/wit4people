import React from "react";

import { View, Text, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Mój profil</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Marzenie")}
          >
            <Text>Moje Marzenia</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>Baza Marzeń</Text>
        </View>
        <View>
          <Text>Baza Wiedzy</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Volunteers")}
          >
            <Text>Wolontariusze</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
