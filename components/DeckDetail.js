import React from 'react'
import { StyleSheet, 
        Platform,
        View,
        Text
    } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
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
            <View style={[styles.container, {backgroundColor: "#CCC"}]}>

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
    alignItems: 'center',
    justifyContent: 'center',
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

export default connect()(DeckDetail)