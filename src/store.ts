import { configureStore } from '@reduxjs/toolkit'
import { globalState } from './reducers'

export const store = configureStore({
    reducer: {
        state: globalState.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch