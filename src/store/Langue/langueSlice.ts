import { createSlice } from '@reduxjs/toolkit'

interface LangueState {
    langue: string
}


const initialState: LangueState = {
    langue: 'eng',
}


export const langueSlice = createSlice({
    name: 'langue',
    initialState,
    reducers: {
        getLangue: (store) => {
            store.langue = store.langue === 'eng' ? 'ru' : 'eng'
        }
    }
})

export const langueActions = langueSlice.actions
export const langueReducer = langueSlice.reducer