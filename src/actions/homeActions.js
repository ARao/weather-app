import { CITY_NAME, KEY,NEXT_DAYS, CURRENT_WEATHER, FORECAST_WEATHER, currentWeatherUrl, forecastWeatherUrl } from './types';


currentWeatherUrl.searchParams.append('key', 'q')
forecastWeatherUrl.searchParams.append('key', 'q', 'dt')

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
  let arr  = [];
  for(let day of getNextDate()){
    forecastWeatherUrl.searchParams.set('dt', day)
    arr.push( fetch(forecastWeatherUrl.href) )
  }
  
  Promise.all(arr)
  .then(forecasts => Promise.all(forecasts.map( forecast => forecast.json() ) ) )
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

function *getNextDate(){
  let today = new Date();
  for(let i = 0; i< NEXT_DAYS; i++){
    yield  `${today.getDate() + i}-${today.getMonth()+1}-${today.getFullYear()}`
  }
  return ;
}