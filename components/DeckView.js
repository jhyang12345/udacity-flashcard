import React, { Component, } from "react";
import { Text, 
        View, 
        StyleSheet, 
        TouchableOpacity,
        TouchableWithoutFeedback
     } from "react-native";
import { connect } from "react-redux";
import DeckComponent from "./DeckComponent"

class DeckView extends Component {
    componentDidMount() {
        
    }

    touchCallback = () => {
        const { navigation } = this.props;
        console.log(this.props)
        navigation.navigate(
            'DeckDetail',
        )
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.currentDeckContainer}>
              <Text style={styles.currentDecks}>Current Decks</Text>
              <DeckComponent />
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    currentDeckContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    currentDecks: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    deckName: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontSize: 28,
    },
    cardCount: {
        fontSize: 16,
        color: "#999",
        textAlign: 'center',
    },
})

export default connect()(DeckView)