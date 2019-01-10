import { CITY_NAME, KEY,NEXT_DAYS } from '../constants/appConst';
import { CURRENT_WEATHER, FORECAST_WEATHER } from '../constants/actionConst'
import { currentWeatherUrl, forecastWeatherUrl }from '../constants/apiUrl'
import interceptor from '../interceptor'

interceptor();

currentWeatherUrl.searchParams.append('key', 'q')
forecastWeatherUrl.searchParams.append('key', 'q', 'days')

export const fetchCurrent = ()=>dispatch =>{
  currentWeatherUrl.searchParams.set('key', KEY)
  currentWeatherUrl.searchParams.set('q', CITY_NAME)
  
  fetch(currentWeatherUrl.href)
    .then(res => res.json())
    .then(weather => {
        dispatch({
          type : CURRENT_WEATHER,
          payload : weather 
        })
      }
    );
}
export const fetchForecast = () => dispatch =>{

  forecastWeatherUrl.searchParams.set('key', KEY)
  forecastWeatherUrl.searchParams.set('q', CITY_NAME)
  forecastWeatherUrl.searchParams.set('days', NEXT_DAYS)

  fetch(forecastWeatherUrl.href)
  .then(forecasts => forecasts.json()) 
  .then( forecasts => { 
    dispatch({
      type: FORECAST_WEATHER,
      payload : forecasts
    });
  })
  .catch(err => {
    console.log("error at homeAction ------->")
    console.log(err)
  })
  
}
