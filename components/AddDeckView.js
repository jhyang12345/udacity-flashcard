import React, { Component } from "react";
import { StyleSheet,
        Text, 
        View,
        TextInput,
        TouchableOpacity,
    } from 'react-native'
import { connect } from "react-redux";

class AddDeckView extends Component {
  render() {
    return (
        <View style={styles.container}>

        </View>
    )
    
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default connect()(AddDeckView);
