import React from "react";
import {
  StyleSheet,
  CheckBox,
  ScrollView,
  Text,
  View,
  Platform,
  TouchableHighlight,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <TouchableHighlight onPress={() => navigation.navigate("Marzenie")}>
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
              <Text style={{ paddingTop: 5 }}>MICHAŁ KOWALSKI</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
  },
});
