import React from 'react'
import { StyleSheet, 
        Platform,
        View,
        Text,
        TouchableOpacity,
    } from 'react-native'
import { connect } from 'react-redux'
import { fetchDeckById, removeDeck } from "../utils/api";

class DeckDetail extends React.Component {

    state = {
      id: "",
      title: "",
      cards: [],
    }

    componentDidMount() {
      
      console.log(fetchDeckById)
      this.handleDeckData()
    }

    handleDeckData = () => {
      const { deckId } = this.props.navigation.state.params;

      fetchDeckById(deckId)
        .then(deck => {
          this.setState(() => ({
            id: deck.id,
            title: deck.title,
            cards: deck.cards
          }));
        });
    }

    willFocus = this.props.navigation.addListener(
      'willFocus',
      (payLoad) => {
        this.handleDeckData()
      }
    )

    addCardCallback = () => {
        const { navigation } = this.props
        console.log("addCardCallback", navigation)
        navigation.navigate(
            "AddCard",
            { deckId: this.state.id }
        )
    }

    deleteDeckCallback = () => {
      const { navigation } = this.props
      console.log("Deleting deck", this.state.id)
      removeDeck(this.state.id)
        .then((result) => {
          navigation.navigate(
            "Decks"
          )
        })
    }

    startQuizCallback = () => {
      const { navigation } = this.props
      console.log("startQuiz called")
      navigation.navigate(
        "QuizView",
        { deckId: this.state.id }
      )
    }

    render() {
     const { title, cards } = this.state

        return (
          <View style={styles.container}>
            <View style={styles.topHalf}>
              <Text className="deckName" style={styles.deckName}>
                {title}
              </Text>
              <Text className="cardCount" style={styles.cardCount}>
                {cards.length} cards
              </Text>
            </View>
            <View
              style={[styles.bottomHalf]}
            >
              <TouchableOpacity
                style={[styles.buttonStyle, styles.addCard]}
                onPress={this.addCardCallback}
              >
                <Text>Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonStyle, styles.startQuiz]}
                onPress={this.startQuizCallback}
              >
                <Text style={{ color: "#FFF" }}>Start Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonStyle, styles.deleteDeck]}
                onPress={this.deleteDeckCallback}
              >
                <Text style={{ color: "#ff3b3f" }}>Delete Deck</Text>
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
  topHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomHalf: {
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
    borderRadius: 5
  },
  addCard: {
    backgroundColor: "#FFF"
  },
  startQuiz: {
    marginTop: 20,
    backgroundColor: "#333"
  },
  deleteDeck: {
    marginTop: 20,
    borderColor: "#ff3b3f"
  },
  deckName: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 28
  },
  cardCount: {
    fontSize: 16,
    color: "#999",
    textAlign: "center"
  }
});

export default connect()(DeckDetail)