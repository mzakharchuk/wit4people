import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

class DatabaseDreams extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, prosp) => {
  return {};
};
export default connect(mapStateToProps)(DatabaseDreams);
