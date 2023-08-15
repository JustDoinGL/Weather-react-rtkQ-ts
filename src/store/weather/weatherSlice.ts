import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Weather5Days } from '../../models/weather'

const LS_CITY_KEY = 'rfk'
const ARR_CITY_KEY = 'rr'

interface WeatherState {
  city: string,
  star: string,
  cities: string[],
  search: boolean,
  data: number,
  value: number,
  valueMax: number,
  valueMin: number,
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
  cities: getCitiesFromLocalStorage(),
  search: false,
  data: 0,
  valueMax: 8,
  valueMin: 0,
  value: 0
}


export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCity: (store, action: PayloadAction<string>) => {
      store.city = action.payload
      localStorage.setItem(LS_CITY_KEY, JSON.stringify(store.city))
    },
    cleanCity: (store) => {
      store.city = ''
      localStorage.setItem(LS_CITY_KEY, JSON.stringify(''))
      store.search = false
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
    openHelper: (store) => {
      store.search = true
    },
    getDate: (store, action: PayloadAction<number>) => {
      store.data = action.payload
    },
    getValue: (store, action: PayloadAction<Weather5Days>) => {
      const index = action.payload.list.findIndex(obj => obj.dt_txt.slice(-8) === "00:00:00")
      store.valueMax = index
    },
    plusValue: (store) => {
      if ((store.valueMin + 8) < 39) {
        store.valueMin = store.valueMax
        if ((store.valueMax + 8) < 39) {
          store.valueMax = store.valueMax + 8
        } else {
          store.valueMax = 39
        }
        store.data = store.valueMin
      } else {
        store.valueMax = store.valueMax - store.valueMin
        store.valueMin = 0
        store.data = 0
      }
    },
    minusValue: (store) => {
      if (store.valueMin - 8 > 0) {
        store.valueMax = store.valueMin
        if ((store.valueMin - 8) > 0) {
          store.valueMin = store.valueMin - 8
        } else {
          store.valueMin = 0
        }
        store.data = store.valueMin
      } else {
        store.valueMax = store.valueMax - store.valueMin
        store.valueMin = 0
        store.data = 0
      }
    }
  }
})

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer