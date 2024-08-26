import dotenv from 'dotenv';
import { query, response } from 'express';
import { parse } from 'path';
dotenv.config();


interface Coordinates {
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    sys: {
        country: string;
        state: string;
    };
}

class Weather {
    cityName: string;
    dt: string;
    temp: number;
    humidity: number;
    windSpeed: number;

    constructor(cityName: string, dt: string, temp: number, humidity: number, windSpeed: number) {
        this.cityName = cityName;
        this.dt = dt;
        this.temp = temp;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
    }
}
// weatherservice ill let me get a city lat/long, I may  need a city first, , will connect the api to my code within in, 
class WeatherService {

    private baseURL?: string | undefined;
    private appid?: string | undefined;
    cityName?: string | undefined
    constructor() {
        this.baseURL = process.env.API_BASE_URL || '';
        this.appid = process.env.API_KEY || '';
    }

    async fetchLocationData() {
        if (!this.appid || !this.baseURL) {
            throw new Error('API_KEY and/or API_BASE_URL is not defined in .env file');
        }
        const response = await fetch(`${this.baseURL}data/2.5/weather?q=${this.cityName}&appid=${this.appid}`);
        const data = await response.json();
        return data;
    }

    async destructureLocationData(locationData: Coordinates): Promise<void> {
        const response: Coordinates = await this.fetchLocationData();
        const { name, coord: { lat, lon }, sys: { country, state } } = response;
        console.log(locationData);
        console.log(`Name: ${name}`);
        console.log(`Latitude: ${lat}`);
        console.log(`Longitude: ${lon}`);
        console.log(`Country: ${country}`);
        console.log(`State: ${state}`);
    }

    async fetchWeatherData(coordinates: Coordinates) {
        if (!this.appid || !this.baseURL) {
            throw new Error('API_KEY and/or API_BASE_URL is not defined in .env file');
        }
        const { lat, lon } = coordinates.coord;
        const response = await fetch(`${this.baseURL}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.appid}`);
        const data = await response.json();
        return data;
    }

    // TODO: Build parseCurrentWeather method
    async parseCurrentWeather(response: any) {
        try {
            const { cityName, dt, temp, humidity, windSpeed } = response;
            const weatherData: Weather = new Weather(cityName, dt, temp, humidity, windSpeed);
            return weatherData;
        } catch (error) {
            console.error('Error parsing current weather:', error);
            return null;
        }
    }
    // TODO: Complete buildForecastArray method
    async buildForecastArray(currentWeather: Weather, weatherData: any[]) {
        const forecastArray: Weather[] = [];
        for (this.parseCurrentWeather(data)) {
            const { cityName, dt, temp, humidity, windSpeed } = data;
            const forecastWeather: Weather = new Weather(cityName, dt, temp, humidity, windSpeed);
            forecastArray.push(forecastWeather)
        } return forecastArray;

    }
    // TODO: Complete getWeatherForCity method
    async getWeatherForCity(City: string) {
        try {
            const locationData = await this.fetchLocationData();
            const { coord } = locationData;
            const weatherData = await this.fetchWeatherData(coord);
            const forecastArray = await this.buildForecastArray(currentWeather: Weather, weatherData);
            return forecastArray;
        }
    }
}






// object approach to this like the vehicle builder/alsmo mini project
export default new WeatherService();
// TODO: Define an interface for the Coordinates object
// TODO: Complete the WeatherService class
