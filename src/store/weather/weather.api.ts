import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { key } from './../../API/const';

import { Root } from '../../models/weather';

const url: string = `https://api.openweathermap.org/data/2.5/`

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getWeather: builder.query<Root, string[]>({
      query: (info) => ({
        url: `/weather?q=${info[0]}&APPID=${key}&units=metric&lang=${info[1]}`
      }),
    }),
  }),
})


export const { useLazyGetWeatherQuery } = weatherApi