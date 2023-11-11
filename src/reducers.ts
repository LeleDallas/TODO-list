
import { createSlice } from '@reduxjs/toolkit'
import { loadLocalStorageData } from './utils'

const initialState = {
    state: false,
    loading: false,
    dark: loadLocalStorageData("theme", window.matchMedia("(prefers-color-scheme: dark)").matches),
    avatar: loadLocalStorageData("avatar", "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png")
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
        },
        updateTheme: (state, action) => {
            state.dark = action.payload
            localStorage.setItem('theme', action.payload)
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload
            localStorage.setItem('avatar', JSON.stringify(action.payload))
        },
    },
})

export const { reloadState, setLoad, updateTheme, setAvatar } = globalState.actions