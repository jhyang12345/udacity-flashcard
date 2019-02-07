import React, { Component, } from "react";
import { Text, 
        View, 
        StyleSheet, 
        FlatList,
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
        this.handleDeckData()
    }

    handleDeckData = () => {
        fetchDecks()
            .then((results) => {
                this.setDeckList(results)
            })
    }

    willFocus = this.props.navigation.addListener(
        'willFocus',
        (payload) => {
            this.handleDeckData();
        }
    );

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
                                navigation={this.props.navigation}
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