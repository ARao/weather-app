import { CITY_NAME, KEY, NEXT_DAYS } from '../constants/appConst';
import { CURRENT_WEATHER, FORECAST_WEATHER } from '../constants/actionConst'
import { currentWeatherUrl, forecastWeatherUrl } from '../constants/apiUrl'


const currentWeatherUrlParams = new URL(currentWeatherUrl.href)
const forecastWeatherUrlParams = new URL(forecastWeatherUrl.href)

currentWeatherUrlParams.searchParams.append('key', 'q')
forecastWeatherUrlParams.searchParams.append('key', 'q', 'days')

export const fetchCurrent = () => dispatch => {

  currentWeatherUrlParams.searchParams.set('key', KEY)
  currentWeatherUrlParams.searchParams.set('q', CITY_NAME)

  return fetch(currentWeatherUrlParams.href)
    .then(res => {
      return res.json()
    })
    .then(weather => {
      dispatch({
        type: CURRENT_WEATHER,
        payload: weather
      })
    }
    )
    .catch(err => {
      console.log("error at forecast home action ------------->")
      console.log(err);
    });
}
export const fetchForecast = () => dispatch => {

  forecastWeatherUrlParams.searchParams.set('key', KEY)
  forecastWeatherUrlParams.searchParams.set('q', CITY_NAME)
  forecastWeatherUrlParams.searchParams.set('days', NEXT_DAYS)

  return fetch(forecastWeatherUrlParams.href)
    .then(forecasts => forecasts.json())
    .then(forecasts => {
      dispatch({
        type: FORECAST_WEATHER,
        payload: forecasts
      });
    })
    .catch(err => {
      console.log("error at homeAction ------->")
      console.log(err)
    })
}
