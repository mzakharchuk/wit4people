import React from "react";

import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Mój profil</Text>
        </View>
        <View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("Marzenie")}
          >
            <Text style={styles.text}>Moje Marzenia</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("DatabaseDreams")}
          >
            <Text style={styles.text}>Baza Marzeń</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.text}>Baza Wiedzy</Text>
        </View>
        <View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("Volunteers")}
          >
            <Text style={styles.text}>Wolontariusze</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  text: {
    fontSize: 20,
  },
});
