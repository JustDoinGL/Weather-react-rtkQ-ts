export interface Root {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  
  export interface Wind {
    speed: number
    deg: number
    gust: number
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Sys {
    country: string
    sunrise: number
    sunset: number
  }

  // __________________________________________________________

  export interface WeatherDays {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City2
  }
  
  export interface List {
    dt: number
    main: Main2
    weather: Weatherq[]
    clouds: Clouds2
    wind: Wind2
    visibility: number
    pop: number
    rain?: Rain2
    sys: Sys
    dt_txt: string
  }
  
  export interface Main2 {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  
  export interface Weatherq {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Clouds2 {
    all: number
  }
  
  export interface Wind2 {
    speed: number
    deg: number
    gust: number
  }
  
  export interface Rain2 {
    "3h": number
  }
  
  export interface Sys2 {
    pod: string
  }
  
  export interface City2 {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
  
  export interface Coord2 {
    lat: number
    lon: number
  }
  
  