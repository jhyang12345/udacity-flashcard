import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'UdacityFlashcard:deck'

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

export function submitDeck(deck) {
    const id = deck.id
    console.log("Submitting deck", deck)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [id]: deck,
    }))
}