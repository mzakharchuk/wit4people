import React from "react";
import { View, Text, CheckBox, StyleSheet } from "react-native";

export const CheckboxWithTitle = ({ title, value, onChange }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <CheckBox
        value={value}
        onValueChange={onChange}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: { alignSelf: "center" },
  label: {
    margin: 8,
  },
});
