import React, { Component } from "react"
import { View,
        StyleSheet,
        Text,
        TouchableOpacity,
} from "react-native"
import { connect } from "react-redux"

class QuizComponent extends Component {

    confessAnswer(right) {
        console.log("Confessed", right)
    }

    render() {
        const { card, viewingQuestion, traverseQuestion } = this.props
        
        return (
            <View style={styles.container}>
                {
                    (viewingQuestion)
                    ? (
                        <View>
                            <Text
                                style={styles.question}
                            >
                                {card.question}
                            </Text>
                            <TouchableOpacity
                                onPress={traverseQuestion}
                                style={styles.buttonStyle}>
                                <Text
                                    style={{color: "#FFF"}}>
                                    Show Answer
                                </Text>
                            </TouchableOpacity>
                        </View>
                        )
                    : (
                        <View>
                            <Text style={styles.answer}>
                                {card.answer}
                            </Text>
                            <View
                                    style={{
                                        alignSelf: 'stretch',
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        alignItems: "center"}}>
                                <TouchableOpacity
                                    style={styles.answerButton}
                                    onPress={this.confessAnswer.bind(this, true)}
                                    >
                                    <Text style={{color: "#FFF"}}>
                                        Right
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.answerButton,
                                     {marginLeft: 20}]}
                                    onPress={this.confessAnswer.bind(this, false)}
                                    >
                                    <Text style={{color: "#FFF"}}
                                        >
                                        Wrong
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
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
    question: {
        fontSize: 24,
        marginLeft: 12,
        marginRight: 12,
        textAlign: "center",
    },
    answer: {
        fontSize: 24,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 20,
        textAlign: "center",
    },
    buttonStyle: {
        width: 180,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#333",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#333"
    },
    answerButton: {
        width: 120,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#555",
        backgroundColor: "#555",
        borderRadius: 5,
    }

})

export default connect()(QuizComponent)