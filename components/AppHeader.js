import React from 'react'
import { Platform, 
        View, 
        Text, 
        TouchableWithoutFeedback 
    } from 'react-native'
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Header } from 'react-native-elements'
import { blue } from '../utils/colors'

class AppHeader extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { navigation } = this.props
        
        return (
            <Header
                outerContainerStyles={{
                    height:
                    Platform.OS === "ios" ? 70 : 70 - 24
                }}
                leftComponent={<LeftComponent navigation={navigation}/>}
                centerComponent={{
                    text: "MY TITLE",
                    style: { color: "#fff" }
                }}
                rightComponent={{
                    icon: "home",
                    color: "#fff"
                }}
                containerStyle={{
                    backgroundColor: blue,
                }}
            />
        )
    }
}

class LeftComponent extends React.Component {

    pressIcon = () => {
        console.log(this.props)
        const { navigation } = this.props
        navigation.openDrawer()
    }

    render() {
        return (
          <View>
            <TouchableWithoutFeedback
                onPress={this.pressIcon}
                >
              <Icon
                name="menu"
                type="material"
                color="#FFF"
              />
            </TouchableWithoutFeedback>
          </View>
        );
    }
}

export default connect()(AppHeader)