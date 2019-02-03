import React, { Component } from "react";
import { Text, View } from 'react-native'
import { connect } from "react-redux";

class DeckView extends Component {
    render() {
        return (
            <Text>DeckView</Text>
        )
    }
}

export default connect()(DeckView)