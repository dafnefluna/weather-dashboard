import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather 
// do this after server.ts
// when I run into a blocker go into services
router.post('/', (req, res) => {
  // TODO: GET weather data from city name
  WeatherService.cityName;
  req.body.
  // TODO: save city to search history
  
});

// TODO: GET search history
router.get('/history', async (_req, res) => {
  try {
    const savedCity = await WeatherService();
    res.json(savedCity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
