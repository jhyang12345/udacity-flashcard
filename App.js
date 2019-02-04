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
import { Constants } from 'expo'
import reducer from './reducers'

import AppContainer from './components/AppContainer'

export default class App extends React.Component {

  componentDidMount = () => {

  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          {/* <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.24)"
            animated
          />
          {Platform.OS === "android" && Platform.Version >= 20 ? (
            <View
              style={{
                height: 24,
                backgroundColor: "#512DA8"
              }}
            />
          ) : null}
          <ToolbarAndroid
            style={{
              height: 56,
              backgroundColor: "#673AB7",
              elevation: 4
            }}
            navIcon="menu"
            titleColor="white"
            title="CheeseSquare"
          /> */}
          <AppStatusBar backgroundColor={"#888"} barStyle="light-content" />
          <AppContainer />
        </Vi    ew>
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