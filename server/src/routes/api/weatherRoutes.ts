import { Router } from 'express';
const router = Router();
import WeatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js'; // Import HistoryService

router.post('/', async (req, res) => {
  const cityName = req.body.city;
  try {
    const weatherService = new WeatherService();
    const locationData = await weatherService.fetchLocationData(cityName);
    res.json(locationData);
  } catch(error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

router.get('/history', async (_req, res) => {
  try {
    const searchHistory = HistoryService.getSearchHistory(); // Use HistoryService to get search history
    res.json(searchHistory);
  } catch (error) {
    console.error('Error fetching search history:', error);
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
});

export default router;