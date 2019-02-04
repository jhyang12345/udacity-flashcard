import React from 'react';
import { StyleSheet, 
          Text,
          View,
          Platform,
          StatusBar,
       } from 'react-native';
import { Header } from 'react-native-elements'
import { createAppContainer, 
        createBottomTabNavigator,
        createDrawerNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Constatns, Constants } from 'expo'
import reducer from './reducers'
import AppHeader from './components/AppHeader'
import DeckView from './components/DeckView'
import AddDeckView from './components/AddDeckView'
import {purple, white} from "./utils/colors"


export default class App extends React.Component {

  componentDidMount = () => {

  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={"#888"} barStyle="light-content" />

          <AppHeader/>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const RouteConfigs = {
  Decks: {
    screen: DeckView,
    navigationOptions: {
      tabBarLabel: "Decks",
      // tabBarIcon: 
    }
  },
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      // tabBarIcon:
    }
  }
}

const TabNavigatorConfig = {
  initialRouteName: "Decks",
  headerStyle: {
    backgroundColor: purple,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
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

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createDrawerNavigator(RouteConfigs, TabNavigatorConfig);

const AppContainer = createAppContainer(Tabs)

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}></StatusBar>
    </View>
  )
}