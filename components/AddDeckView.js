import React, { Component } from "react";
import { StyleSheet,
        Text, 
        View,
        TextInput,
        TouchableOpacity,
    } from 'react-native'
import { connect } from "react-redux";

class AddDeckView extends Component {
  state = {
    deckTitle: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <Text
            style={styles.deckQuestion}>
            What is the title of your new deck?
            </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={deckTitle => this.setState({ deckTitle })}
            placeholder={"Question"}
            value={this.state.question}
          />
        </View>
        <View style={styles.half}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: "#FFF" }}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    width: 180,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#333"
  },
  deckQuestion: {
    fontSize: 24,
  },
});

export default connect()(AddDeckView);
