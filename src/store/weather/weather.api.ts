import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { key } from './../../API/const';

import { Root, Weather5Days, WeatherDays } from '../../models/weather';

const url: string = `https://api.openweathermap.org/data/2.5/`

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getWeather: builder.query<Root, string[]>({
      query: (info) => ({
        url: `weather?q=${info[0]}&APPID=${key}&units=metric&lang=${info[1]}`
      }),
    }),
    getWeatherDays: builder.query<WeatherDays, string[]>({
      query: (info) => ({
        url: `forecast?q=${info[0]}&cnt=12&appid=${key}&units=metric&lang=${info[1]}`
      }),
    }),
    getWeatherFiveDays: builder.query<Weather5Days, string[]>({
      query: (info) => ({
        url: `forecast?q=${info[0]}&cnt=40&appid=${key}&units=metric&lang=${info[1]}`
      }),
    }),
  }),
})

export const { useLazyGetWeatherQuery, useLazyGetWeatherDaysQuery, useLazyGetWeatherFiveDaysQuery } = weatherApi
