import React from 'react'
import { Platform, View, Text } from 'react-native'
import { connect } from "react-redux";
import { Header } from 'react-native-elements'

class AppHeader extends React.Component {

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
                    style: { color: "#fff" }
                }}
                rightComponent={{
                    icon: "home",
                    color: "#fff"
                }}
            />
        )
    }
}

export default connect()(AppHeader)