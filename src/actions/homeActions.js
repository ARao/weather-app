import { CITY_NAME, KEY,NEXT_DAYS, CURRENT_WEATHER, FORECAST_WEATHER } from './types';

export const fetchCurrent = ()=>dispatch =>{
  fetch(`http://api.apixu.com/v1/current.json?key=${KEY}&q=${CITY_NAME}`)
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
    let arr  = [];
  for(let day of getNextDate()){
    arr.push( fetch(`http://api.apixu.com/v1/forecast.json?key=${KEY}&q=${CITY_NAME}&dt=${day}`) )
  }
  
  Promise.all(arr)
  .then(forecasts => Promise.all(forecasts.map( forecast => forecast.json() ) ) )
  .then( forecasts =>{ 
    dispatch({
      type: FORECAST_WEATHER,
      payload : forecasts
    });
  })
  .catch(err=>{
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