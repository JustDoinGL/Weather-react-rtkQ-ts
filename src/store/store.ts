import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { weatherReducer } from './weather/weatherSlice'
import { langueReducer } from './Langue/langueSlice';

import { weatherApi } from './weather/weather.api';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    langue: langueReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
