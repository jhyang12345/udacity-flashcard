export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function receiveDecks(deck) {
    return {
        type: RECEIVE_DECK,
    }
}

// export function handleInitialData() {
//     return (dispatch) => {
//         dispatch(receiveDecks());
//         return () => {
//             return ({})
//         }    
//     }
    
// }