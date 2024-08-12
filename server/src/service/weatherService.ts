import dotenv from 'dotenv';
import { query, response } from 'express';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

// TODO: Define a class for the Weather object
class Weather {
  cityName: string;
  dt: string;
  temp: number;
  humidity: number;
  wind_speed: number;

  constructor(cityName:string, dt: string, temp: number, humidity: number, wind_speed: number) {
    this.cityName = cityName;
    this.dt = dt;
    this.temp = temp;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string | undefined;
  private appid?: string | undefined;
  private city = '';
  // const cityName= 'cityCoordinates';
  constructor(){
    this.baseURL = process.env.API_BASE_URL || '';
    this.appid = process.env.API_KEY || '';
  }  
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
      if (!this.appid || !this.baseURL) {
        throw new Error('API_KEY and/or API_BASE_URL is not defined in .env file');
      }
      const response: Coordinates[] = await fetch(query).then((res) => res.json());
      // const response =  await fetch(`${this.baseURL}data/2.5/weather?q={city name}&appid={API key}`);
      // const locationData = await response.json();
      // const cityCoords = await this.destructureLocationData(response.data);
      // return cityCoords;
      return response;
    } catch (err) {
      console.log('Error:', err);
      return err;
    }
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const { name, lat, lon, country, state } = locationData;
    // const locationDataArray: Coordinates[] = locationData.map((locationData) => {
      const coordinates: Coordinates = {
      // look at tutoring  // 
      name, lat, lon, country, state,
      } 
      return coordinates;
    }
//the functions above are going to not work until the the bottom in the fetch methods below.

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
  const query = {
    asyn fetch(`${this.baseURL}data/2.5/weather?q={${this.city}}&appid={${this.appid}}`);
  }
    return query;}

  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
// weather data the forecast in the api call

  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {
  // if (fetchLocationData(query: string) && desctructureLocationData(locationData: Coordinates)) {
  //   return json();
  // }

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}


// object approach to this like the vehicle builder/alsmo mini project
export default new WeatherService();
