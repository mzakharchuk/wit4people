import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

import store from "./src/store";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import MarzenieScreen from "./src/screens/Marzenie";
import { getDreamersType } from "./src/_action/dreamers";
export default class App extends React.Component {
  state = { loading: true };

  loadData = () => {
    store.dispatch(getDreamersType());
  };

  async componentWillMount() {
    // loading data
    this.loadData();

    // await Font.loadAsync({
    //   Roboto: require("./assets/fonts/Roboto.ttf"),
    //   Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    //   "righteous-regular": require("./assets/fonts/Righteous-Regular.ttf"),
    //   ...Ionicons.font,
    // });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
