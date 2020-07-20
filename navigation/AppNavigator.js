import React from "react";
import MarzenieScreen from "../src/screens/Marzenie";
import HomeScreen from "../src/screens/Home";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Foundation } from "@expo/vector-icons";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Marzenie",
            headerTitleStyle: {
              fontWeight: "bold",
              paddingLeft: "35%",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
