import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from "react-native"; //Step 1
import { Foundation } from "@expo/vector-icons";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Step 3
      title: props.title,
      expanded: false,
      animation: new Animated.Value(35),
    };
  }
  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  toggle() {
    //Step 1
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded, //Step 2
    });

    this.state.animation.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animation,
      {
        toValue: finalValue,
      }
    ).start(); //Step 5
  }

  render() {
    //Step 5
    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            {this.state.expanded ? (
              <Foundation name="minus" size={20} style={styles.buttonImage} />
            ) : (
              <Foundation name="plus" size={20} style={styles.buttonImage} />
            )}
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
    backgroundColor: "#ccc",
    overflow: "hidden",
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
    color: "#2a2f43",
  },
  button: { paddingTop: 5 },
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 5,
  },
});
