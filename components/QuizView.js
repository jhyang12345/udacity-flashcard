import React, { Component } from "react"
import { View,
        StyleSheet,
        Text,
} from "react-native"
import { connect } from "react-redux"
import { fetchDeckById } from "../utils/api"
import QuizComponent from "./QuizComponent"

class QuizView extends Component {

    state = {
        id: "",
        title: "",
        cards: [],
        curIndex: 0,
        rightAnswers: 0,
        viewingQuestion: true,
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

    traverseQuestion = () => {
        const { viewingQuestion, curIndex } = this.state

        if(viewingQuestion) {
            this.setState(() => ({
                viewingQuestion: false,
            }))
        } else {
            this.setState(() => ({
                viewingQuestion: true,
                curIndex: curIndex + 1,
            }))
        }
    }

    incrementCorrect = () => {
        this.setState((state) => ({
            rightAnswers: state.rightAnswers + 1,
        }))
    }

    resetQuiz = () => {
        this.setState(() => ({
            curIndex: 0,
            rightAnswers: 0,
            viewingQuestion: true,
        }))
    }

    returnToDeck = () => {
        const { navigation } = this.props
        
        navigation.goBack()
    }

    render() {
        const { id, 
            title, 
            cards, 
            curIndex, 
            viewingQuestion,
            rightAnswers
        } = this.state

        return (
            <View style={styles.container}>
                {   
                    cards.length <= 0
                    ? <Text>There are 0 cards in your deck.</Text>
                    : <QuizComponent 
                        card={cards[curIndex]}
                        viewingQuestion={viewingQuestion}
                        traverseQuestion={this.traverseQuestion}
                        incrementCorrect={this.incrementCorrect}
                        rightAnswers={this.state.rightAnswers}
                        resetQuiz={this.resetQuiz}
                        returnToDeck={this.returnToDeck}
                        />
                }
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