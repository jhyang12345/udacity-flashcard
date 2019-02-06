import React from 'react';
import { StyleSheet, 
          Text,
          View,
          Platform,
          StatusBar,
          ToolbarAndroid,
       } from 'react-native';
import { Header } from 'react-native-elements'
import { createAppContainer, 
        createBottomTabNavigator,
        createDrawerNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { middleware } from './middleware'
import { Constants } from 'expo'
import reducer from './reducers'

import AppContainer from './components/AppContainer'

const store = createStore(reducer, middleware)

export default class App extends React.Component {

  componentDidMount = () => {
    console.log("Current store", store)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={"#888"} barStyle="light-content" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{cheight: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} animated {...props}></StatusBar>
    </View>
  )
}