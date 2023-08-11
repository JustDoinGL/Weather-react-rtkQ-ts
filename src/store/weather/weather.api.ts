import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { key } from './../../API/const';

import { Root } from '../../models/weather';

const url: string = `https://api.openweathermap.org/data/2.5/`

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getWeather: builder.query<Root, string>({
      query: (city: string) => ({
        url: `/weather?q=${city},&APPID=${key}&units=metric`,
      }),
    }),
  }),
})


export const { useLazyGetWeatherQuery } = weatherApi