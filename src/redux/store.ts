import { configureStore } from '@reduxjs/toolkit'
import appSlice from "./app.slice"
import cardsSlice from "./cards.slice"

const store = configureStore({
  reducer: {
    cardsSlice,
    appSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store;