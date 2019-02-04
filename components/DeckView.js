import React, { Component, } from "react";
import { Text, 
        View, 
        StyleSheet, 
        TouchableOpacity,
        TouchableWithoutFeedback
     } from "react-native";
import { connect } from "react-redux";

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
            <TouchableWithoutFeedback onPress={this.touchCallback}>
              <View>
                <Text className="deckName" style={styles.deckName}>
                  DeckView
                </Text>
                <Text className="cardCount" style={styles.cardCount}>
                  2 cards
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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