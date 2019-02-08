import React, { Component } from "react"
import { View,
        StyleSheet,
        Text,
} from "react-native"
import { connect } from "react-redux"

class QuizComponent extends Component {
    render() {
        return (
            <View>
                <Text>Question</Text>
            </View>
        )
    }
}

export default connect()(QuizComponent)