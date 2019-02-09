import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux"

class DeckComponent extends Component {
  componentDidMount() {}

  touchCallback = () => {
    const { deck, navigation } = this.props;
    console.log("Navigation", this.props)
    navigation.navigate(
        "DeckDetail",
        {deckId: deck.id}
    );
  };

  render() {
    const { deck } = this.props;

    return (
      <TouchableOpacity onPress={this.touchCallback}>
        <View>
          <Text className="deckName" style={styles.deckName}>
            {deck.title}
          </Text>
          <Text className="cardCount" style={styles.cardCount}>
            {deck.cards.length} cards
          </Text>
        </View>
      </TouchableOpacity>
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
  }
});

export default connect()(DeckComponent)