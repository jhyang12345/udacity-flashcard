import { ADD_DECK, RECEIVE_DECK } from '../actions'
import { submitDeck } from '../utils/api'

function decks(state={}, action) {
    console.log("Action", action)
    switch(action.type) {
        case ADD_DECK :
            submitDeck(action.deck)
            return {
                ...state,
                [action.deck.id]: action.deck,
            }
        case RECEIVE_DECK : {
            return state
        }
        default:
            return state
    }
}

export default decks