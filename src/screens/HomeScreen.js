import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text style={styles.text}>Mój profil</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("Marzenie")}
          >
            <Text style={styles.text}>Moje Marzenia</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("DatabaseDreams")}
          >
            <Text style={styles.text}>Baza Marzeń</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Baza Wiedzy</Text>
        </View>
        <View>
          <TouchableOpacity
            underlayColor="#79E888"
            onPress={() => this.props.navigation.navigate("Volunteers")}
          >
            <Text style={styles.text}>Wolontariusze</Text>
          </TouchableOpacity>
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
