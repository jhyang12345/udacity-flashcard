import React from 'react'
import { StyleSheet, 
        Platform,
        View,
        Text,
        TouchableOpacity,
    } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {

    addCardCallback = () => {
        const { navigation } = this.props
        console.log("addCardCallback", navigation)
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topHalf}>
              <Text className="deckName" style={styles.deckName}>
                Detail Deck
              </Text>
              <Text className="cardCount" style={styles.cardCount}>
                2 cards
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
              >
                <Text style={{ color: "#FFF" }}>Start Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonStyle, styles.deleteDeck]}
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