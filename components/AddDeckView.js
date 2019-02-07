import React, { Component } from "react";
import { StyleSheet,
        Text, 
        View,
        TextInput,
        TouchableOpacity,
    } from 'react-native'
import { connect } from "react-redux";
import { timeToString } from "../utils/helpers"
import { addDeck } from "../actions"
import { StackActions, NavigationActions } from 'react-navigation';

class AddDeckView extends Component {
  state = {
    deckTitle: ""
  };

  submit = () => {
    const { dispatch, navigation } = this.props

    const deck = {
      id: timeToString(),
      title: this.state.deckTitle,
      cards: [],
    }

    dispatch(
      addDeck(deck)
    )

    // navigate to Decks view after new deck is created
    navigation.navigate("Decks", {refresh: true})
    // const pushAction = StackActions.push({
    //   routeName: 'Decks',
    // });
    // this.props.navigation.dispatch(pushAction);
  }

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
            placeholder={"Deck Title"}
            value={this.state.question}
          />
        </View>
        <View style={styles.half}>
          <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={this.submit}>
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
  textInput: {
    alignSelf: "stretch",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 3
  },
  deckQuestion: {
    fontSize: 24,
    textAlign: "center"
  }
});

export default connect()(AddDeckView);
