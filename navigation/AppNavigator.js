import React from "react";
import MarzenieScreen from "../src/screens/Marzenie";
import VolunteersScreen from "../src/screens/VolunteersScreen";
import HomeScreen from "../src/screens/HomeScreen";
import VolunteerScreen from "../src/screens/Volunteer";

import ProfileScreen from "../src/screens/ProfileScreen";
import StartScreen from "../src/screens/StartScreen";
import LoginScreen from "../src/screens/LoginScreen";
import DatabaseDreamsScreen from "../src/screens/DatabaseDreamsScreen";
import DatabaseDreamsResultScreen from "../src/screens/DatabaseDreamsResultScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const AppNavigator = ({ userToken = null }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {userToken == null ? (
          <>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Mam marzenia",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "30%",
                },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: "Profile",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "30%",
                },
              }}
            />

            <Stack.Screen
              name="Volunteers"
              component={VolunteersScreen}
              options={{
                title: "Wolontariusze",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "15%",
                },
              }}
            />
            <Stack.Screen
              name="Marzenie"
              component={MarzenieScreen}
              options={({ navigation, route }) => ({
                title: "Marzenie",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "25%",
                },
                // headerLeft: () => (
                //   <Foundation
                //     name="arrow-left"
                //     size={32}
                //     style={{ paddingLeft: 5 }}
                //     onPress={() => navigation.push("Home")}
                //   />
                // ),
              })}
            />
            <Stack.Screen
              name="DatabaseDreams"
              component={DatabaseDreamsScreen}
              options={{
                title: "Baza Marzeń",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "15%",
                },
              }}
            />
            <Stack.Screen
              name="DatabaseDreamsResult"
              component={DatabaseDreamsResultScreen}
              options={{
                title: "Baza Marzeń",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "15%",
                },
              }}
            />
            <Stack.Screen
              name="Volunteer"
              component={VolunteerScreen}
              options={({ navigation, route }) => ({
                title: "Wolontariusz",
                headerTitleStyle: {
                  fontWeight: "bold",
                  paddingLeft: "25%",
                },
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state, props) => {
  console.log("AppNavigator", state);
  return {
    userToken: state.userToken,
  };
};

export default connect(mapStateToProps)(AppNavigator);
