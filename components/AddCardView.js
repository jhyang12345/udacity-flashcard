import React from 'react'
import { StyleSheet,
        Platform,
        View,
        Text,
        TextInput,
        TouchableOpacity,
    } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from "../utils/api";

class AddCardView extends React.Component {

    state = {
        question: "",
        answer: "",
    }

    submit = () => {
      console.log("CardView", question, answer);

      const { deckId } = this.props.navigation.state.params;
      const { question, answer } = this.state
      const { navigation } = this.props

      addCardToDeck(deckId, this.state)
        .then(() => {
          navigation.navigate("DeckDetail")
        })

      // navigate to existing screen in stack
      
      
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.half}>
              <TextInput
                style={styles.textInput}
                onChangeText={question => this.setState({ question })}
                placeholder={"Question"}
                value={this.state.question}
              />
              <TextInput
                style={styles.textInput}
                onChangeText={answer => this.setState({ answer })}
                placeholder={"Answer"}
                value={this.state.answer}
              />
            </View>
            <View style={styles.half}>
                <TouchableOpacity
                    style={[styles.buttonStyle]}
                    onPress={this.submit}
                    >
                    <Text style={{color: "#FFF"}}>Submit</Text>
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
  buttonStyle: {
    width: 180,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#333",
  }
});

export default connect()(AddCardView)