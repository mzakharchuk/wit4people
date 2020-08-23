import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const TitleIcon = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: "#E9E9E9",
      }}
    >
      <View>
        <MaterialIcons
          name="account-circle"
          size={64}
          style={{ color: "#ffac88" }}
        />
      </View>
      <View style={{ paddingTop: 20, paddingLeft: 20 }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export const ButtonTitle = ({ title, name, onPress, sizeIcon = 94 }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      underlayColor={"transparent"}
      onPress={onPress}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <MaterialIcons
          name="account-circle"
          size={sizeIcon}
          style={{ color: "#79E888" }}
        />
        <View style={{ paddingLeft: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const ButtonTitleSmall = ({ title, name, onPress, sizeIcon = 84 }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      underlayColor={"transparent"}
      onPress={onPress}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <MaterialIcons
          name="account-circle"
          size={sizeIcon}
          style={{ color: "#79E888" }}
        />
        <View style={{ paddingLeft: 10 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                paddingTop: 5,
                width: "68%",
                marginRight: 10,
                color: "#79E888",
              }}
            >
              {title}
            </Text>
            <Text style={{ paddingTop: 5, fontSize: 12 }}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
