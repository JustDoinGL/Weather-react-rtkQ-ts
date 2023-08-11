import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const LS_CITY_KEY = 'rfk'
const ARR_CITY_KEY = 'rr'

interface WeatherState {
  city: string,
  star: string,
  cities: string[],
 }

const getCityFromLocalStorage = (): string => {
  const city = localStorage.getItem(LS_CITY_KEY)
  try {
    return city ? JSON.parse(city) : ''
  } catch {
    return ''
  }
}

const getCitiesFromLocalStorage = (): string[] => {
  const cities = localStorage.getItem(ARR_CITY_KEY)
  try {
    return cities ? JSON.parse(cities) : []
  } catch {
    return []
  }
}

const initialState: WeatherState = {
  city: getCityFromLocalStorage(),
  star: '✩',
  cities: getCitiesFromLocalStorage()
}


export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
      localStorage.setItem(LS_CITY_KEY, JSON.stringify(state.city))
    },
    cleanCity: (store) => {
      store.city = ''
      localStorage.setItem(LS_CITY_KEY, JSON.stringify(''))
    },
    getStar: (store, action: PayloadAction<string[]>) => {
      if ('✩' === action.payload[0]) {
        store.star = '⭐'
        store.cities.push(action.payload[1])
        localStorage.setItem(ARR_CITY_KEY, JSON.stringify(store.cities))
        store.star = '✩'
      } else {
        store.star = '✩'
        store.cities = store.cities.filter(e => e !== action.payload[1])
        localStorage.setItem(ARR_CITY_KEY, JSON.stringify(store.cities))
      }
    },
    getLangue: (store) => {

    }
  }
})

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer