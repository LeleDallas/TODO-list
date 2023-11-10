
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: false,
    loading: false
}

export const globalState = createSlice({
    name: 'globalState',
    initialState: initialState,
    reducers: {
        reloadState: (state) => {
            state.state = !state.state
        },
        setLoad: (state, action) => {
            state.loading = action.payload
        }
    },
})

export const { reloadState, setLoad } = globalState.actions