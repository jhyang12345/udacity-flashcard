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
    navigationOptions: {
      tabBarLabel: "Decks",
      header: <AppHeader />
      // tabBarIcon:
    }
  }
});

const AddDeckNavigator = createStackNavigator({
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      header: <AppHeader />
      // tabBarIcon:
    }
  }
});

const drawerScreens = createDrawerNavigator(
  {
    Decks: DeckNavigator,
    AddDeck: AddDeckNavigator
  },
  {
    initialRouteName: "Decks",
    navigationOptions: ({ navigation }) => ({
      header: null
    })
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