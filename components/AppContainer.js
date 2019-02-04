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

const RouteConfigs = {
  Decks: {
    screen: DeckView,
    navigationOptions: {
      tabBarLabel: "Decks"
      //   header: <AppHeader />
      // tabBarIcon:
    }
  },
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: {
      tabBarLabel: "Add Deck"
      // header: <AppHeader />,
      // tabBarIcon:
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "Decks",
  headerStyle: {
    backgroundColor: blue
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? blue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : blue,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

// View does not provide onPress functionality
const DrawerNavigatorConfig = {
  initialRouteName: "Decks",
  headerMode: "float",
  navigationOptions: ({ navigation }) => ({
    headerStyle: { backgroundColor: blue },
    title: "Welcome!",
    headerTintColor: "white",
    headerLeft: (
      <View style={{ color: white, paddingLeft: 12, paddingRight: 12 }}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            type="material"
            color="#FFF"
          />
        </TouchableWithoutFeedback>
      </View>
    )
  })
};

const androidStackNav = createStackNavigator({
  RootStack: {
    screen: createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
  }
});

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : androidStackNav;

const AppContainer = createAppContainer(Tabs);

export default AppContainer;
