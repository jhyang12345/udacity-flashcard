import React from 'react';
import { StyleSheet, 
          Text,
          View,
          Platform,
          StatusBar,
       } from 'react-native';
import { createAppContainer, 
        createBottomTabNavigator,
        createDrawerNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import DeckView from './components/DeckView'
import AddDeckView from './components/AddDeckView'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          
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
  navigationOptions: {
    header: null
  }
}

const Tabs =
  Platform.OS === "ios"
  ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
  : createDrawerNavigator(RouteConfigs, TabNavigatorConfig)

const AppContainer = createAppContainer(Tabs)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
