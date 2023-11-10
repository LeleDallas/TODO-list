import { configureStore } from '@reduxjs/toolkit'
import { update } from './reducers'

export const store = configureStore({
    reducer: {
        update: update.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch