import React from 'react'
import { Platform, View, Text } from 'react-native'
import { connect } from "react-redux";
import { Header } from 'react-native-elements'
import { blue } from '../utils/colors'

class AppHeader extends React.Component {

    componentDidMount() {
        console.log("AppHeader", this.props)
    }

    render() {
        return (
            <Header
                outerContainerStyles={{
                    height:
                    Platform.OS === "ios" ? 70 : 70 - 24
                }}
                leftComponent={{
                    icon: "menu",
                    color: "#fff"
                }}
                centerComponent={{
                    text: "MY TITLE",
                    style: { color: "#333" }
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

export default connect()(AppHeader)