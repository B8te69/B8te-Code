import { createSlice } from "@reduxjs/toolkit"


export type cardT = {
    cardId: number,
    cardName: string,
    cardText?: string,
    cardVariants?: string[],
    cardCorAnsw: string,
    cardRtAnsw: string,
    isAnsRight: boolean,
}

export interface InitialStateI {
    cardsCount: number,
    cards: cardT[],
    fishedCards: number,
    completedCards: number,
    allCardsF: boolean,
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cardsCount: 2,
        cards: [{
            cardId: 413,
            cardName: 'Что такое JSX?',
            cardVariants: ['HTML в JS', 'Вид томатов', 'Соотношение сторон монитора'],
            cardCorAnsw: 'HTML в JS',
            cardRtAnsw: '',
        },
        {
            cardId: 213,
            cardName: 'Что из этого редактор кода?',
            cardVariants: ['VSCode', 'Google Chrome', 'Discord'],
            cardCorAnsw: 'VSCode',
            cardRtAnsw: '',
        }
    ],
        fishedCards: 0,
        completedCards: 0,
        allCardsF: false
    } as InitialStateI,
    reducers: {
        finishCard: (state) => {
            state.fishedCards > state.cardsCount ? 
            state.fishedCards += 1 :
            state.allCardsF = true
        },
        answerCheq: (state, {payload}) => {
            state.cards[payload.cardId].cardRtAnsw = payload.text
            if (state.cards[payload.cardId].cardRtAnsw === state.cards[payload.cardId].cardCorAnsw) {
                state.completedCards += 1
            }
        }
    }
})

export const { finishCard, answerCheq } = cardsSlice.actions

export default cardsSlice.reducer;