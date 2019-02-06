import React, { Component, } from "react";
import { Text, 
        View, 
        StyleSheet, 
        
     } from "react-native";
import { connect } from "react-redux";
import DeckComponent from "./DeckComponent"
import { fetchDecks } from '../utils/api'

class DeckView extends Component {
    state = {
        deckList: [],
    }

    componentDidMount() {
        console.log("Decks", this.props)
        fetchDecks()
            .then((results) => {
                this.setDeckList(results)
            })
    }

    setDeckList = (results) => {
        const deckList = []
        for (let id in results) {
            deckList.push(results[id])
        }
        deckList.sort((a, b) => (parseInt(b.id) - parseInt(a.id)))
        this.setState(() => ({
            deckList: deckList,
        }))
        
    }

    touchCallback = () => {
        const { navigation } = this.props;
        navigation.navigate(
            'DeckDetail',
        )
    }

    render() {
        const { deckList } = this.state
        return (
          <View style={styles.container}>
            <View style={styles.currentDeckContainer}>
              <Text style={styles.currentDecks}>Current Decks</Text>
              {
                deckList.map((deck) => (
                    <DeckComponent 
                        deck={deck}
                        key={deck.id}
                    />
                ))
              }
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

function mapStateToProps({ decks }) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckView)