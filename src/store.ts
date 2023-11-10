import { configureStore } from '@reduxjs/toolkit'
import { globalState } from './reducers'

export const store = configureStore({
    reducer: {
        update: globalState.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch