import { CITY_NAME, KEY, HISTORY_WEATHER, historyWeatherUrl } from './types';

historyWeatherUrl.searchParams.append('key', 'q', 'dt')


export const fetchHistories = () => dispatch => {
  historyWeatherUrl.searchParams.set('key', KEY)
  historyWeatherUrl.searchParams.set('q', CITY_NAME)
  
  let arr  = [];
  for(let day of getNextDate()){
    historyWeatherUrl.searchParams.set('dt', day)
    arr.push( fetch(historyWeatherUrl.href) )
  }
  
  Promise.all(arr)
  .then( histories => Promise.all(histories.map( history => history.json() ) ) )
  .then( histories => { 
    dispatch({
      type: HISTORY_WEATHER,
      payload : histories
    });
  })
  .catch(err => {
      console.log("error at homeAction ------->")
      console.log(err)
  })
  
}

function *getNextDate(){
  let today = new Date();
  for( let i = today.getDate()-7; i < today.getDate(); i++ ){
    yield  `${i}-${today.getMonth()+1}-${today.getFullYear()}`;
  }
  return ;
}