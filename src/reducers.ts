
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: false
}

export const update = createSlice({
    name: 'update',
    initialState: initialState,
    reducers: {
        updateData: (state) => {
            state.state = !state.state
        }
    },
})

export const { updateData } = update.actions