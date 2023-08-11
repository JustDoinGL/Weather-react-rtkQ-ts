import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface LangueState {
    langue: string
}


const initialState: LangueState = {
    langue: 'en',
}


export const langueSlice = createSlice({
    name: 'langue',
    initialState,
    reducers: {
        getLangue: (store, action: PayloadAction<string>) => {
            store.langue = action.payload === 'en' ? 'ru' : 'en'
        }
    }
})

export const langueActions = langueSlice.actions
export const langueReducer = langueSlice.reducer