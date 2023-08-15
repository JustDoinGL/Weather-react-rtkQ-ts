import { Root, Weather5Days, WeatherDays } from "../models/weather";

let fetchProps: Function;
let weatherProps: Root | undefined;
let isErrorProps: boolean;
let isLoadingProps: boolean;
let weatherProps2Days: WeatherDays | undefined;
let weatherProps5Days: Weather5Days | undefined;

export const getWeatherProps = (
    weather: Root | undefined,
    isLoading: boolean,
    isError: boolean,
    weather12: WeatherDays | undefined,
    isLoading12: boolean,
    isError12: boolean,
    weather5Days: Weather5Days | undefined,
    isLoading5: boolean,
    isError5: boolean,
    fetchRepos: Function,
    fetch: Function,
    fetch5: Function,
    info: string
) => {
    if (info === "Weather") {
        fetchProps = fetchRepos;
        weatherProps = weather;
        isErrorProps = isError;
        isLoadingProps = isLoading;
        return {
            fetchProps,
            weatherProps,
            isErrorProps,
            isLoadingProps,
        };
    } else if (info === "WeatherDay") {
        fetchProps = fetch;
        weatherProps2Days = weather12;
        isErrorProps = isError12;
        isLoadingProps = isLoading12;
        return {
            fetchProps,
            weatherProps2Days,
            isErrorProps,
            isLoadingProps,
        };
    } else {
        fetchProps = fetch5;
        weatherProps5Days = weather5Days;
        isErrorProps = isError5;
        isLoadingProps = isLoading5;
        return {
            fetchProps,
            weatherProps5Days,
            isErrorProps,
            isLoadingProps,
        };
    }
};