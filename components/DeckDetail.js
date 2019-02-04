import React from 'react'
import { StyleSheet, 
        Platform,
        View,
        Text
    } from 'react-native'

class DeckDetail extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <Text className="deckName" style={styles.deckName}>
              Detail Deck
            </Text>
            <Text className="cardCount" style={styles.cardCount}>
              2 cards
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },

});