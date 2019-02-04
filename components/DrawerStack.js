import React from "react";
import { Platform, Text, View, TouchableWithoutFeedback } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import AppHeader from "./AppHeader";
import DeckView from "./DeckView";
import AddDeckView from "./AddDeckView";
import { blue, white } from "../utils/colors";
import { Icon } from "react-native-elements";

const DeckNavigator = createStackNavigator({
  Decks: {
    screen: DeckView,
    navigationOptions: ({navigation}) => {
        console.log("DeckView", navigation)
        return({
            tabBarLabel: "Decks",
            header: <AppHeader navigation={navigation}/>
            // tabBarIcon:
        })
    }
  }
});

const AddDeckNavigator = createStackNavigator({
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Add Deck",
      header: <AppHeader navigation={navigation} />
      // tabBarIcon:
    })
  }
});

const drawerScreens = createDrawerNavigator(
  {
    Decks: DeckNavigator,
    AddDeck: AddDeckNavigator
  },
  {
    initialRouteName: "Decks",
    navigationOptions: ({ navigation }) => {
        console.log("drawerScreen", navigation)
        return ({
            header: null
        })
    }
  }
);

export default (DrawerStack = createStackNavigator(
  {
    drawer: {
      screen: drawerScreens
    }
  },
  {
    initialRouteName: "drawer",
  }
));