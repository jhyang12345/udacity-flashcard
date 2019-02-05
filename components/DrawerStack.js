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
import DeckDetail from "./DeckDetail"
import AddCardView from "./AddCardView"
import { blue, white } from "../utils/colors";
import { Icon } from "react-native-elements";

const DeckNavigator = createStackNavigator(
  {
    Decks: {
      screen: DeckView,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Decks",
          header: <AppHeader navigation={navigation} title={"Decks"} />
          // tabBarIcon:
        };
      }
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Deck Detail",
          header: null
        };
      }
    },
    AddCard: {
      screen: AddCardView,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Add Card",
          header: null
        };
      }
    }
  },
  {
    initialRouteName: "Decks"
  }
);

const AddDeckNavigator = createStackNavigator({
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Add Deck",
      header: <AppHeader 
        navigation={navigation} 
        title={"Add Deck"}
        />
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