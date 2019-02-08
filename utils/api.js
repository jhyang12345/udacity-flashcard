import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'UdacityFlashcard:deck'

// DECK OBJECT SIGNATURE:
// id: {
//     id, "",
//     title, "",
//     cards: []
// }

export function fetchDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((result) => {
            return JSON.parse(result)
        })
        // .then((result) => {
        //     console.log("fetchDecks", result)
        //     return result
        // })
}

export function fetchDeckById(deckId) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((result) => {
            const decksObject = JSON.parse(result)
            return decksObject[deckId]
        })
}

export function submitDeck(deck) {
    const id = deck.id
    console.log("Submitting deck", deck)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [id]: deck,
    }))
}
export function removeDeck(deckId) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deckId] = undefined
            delete data[deckId]
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}

export function addCardToDeck(deckId, card) {
    console.log("Attempting to add card", deckId, card)
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deckId].cards.push(card)
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}