import React, { Component } from "react"
import { View,
        StyleSheet,
        Text,
} from "react-native"
import { connect } from "react-redux"
import { fetchDeckById } from "../utils/api"

class QuizView extends Component {

    state = {
        id: "",
        title: "",
        cards: [],
        curIndex: 0,
        viewingQuestion: true,
        markAnswer: false,
        quizOver: false,
    }

    componentDidMount() {
        console.log("Mounted")
        this.handleDeckData()
    }

    handleDeckData = () => {
        const { deckId } = this.props.navigation.state.params;

        console.log("HandleDeckData")

        fetchDeckById(deckId)
            .then(deck => {
                console.log("Retrieved deck", deck)
                this.setState(() => ({
                    id: deck.id,
                    title: deck.title,
                    cards: deck.cards,
                }))
            })
    }

    render() {
        const { id, 
            title, 
            cards, 
            curIndex, 
            viewingQuestion,
            markAnswer, 
            quizOver 
        } = this.state

        console.log("Quiz", cards)

        return (
            <View style={styles.container}>
                {   
                    cards.length <= 0
                    ? <Text>There are 0 cards in your deck.</Text>
                    : null
                }
                {/* {
                    viewingQuestion === true
                    ? <Text>{cards[curIndex].question}</Text>
                    : <Text>{cards[curIndex].answer}</Text>
                } */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

})

export default connect()(QuizView)