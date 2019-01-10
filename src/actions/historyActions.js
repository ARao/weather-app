import { CITY_NAME, KEY, HISTORY_DAYS} from '../constants/appConst';
import { HISTORY_WEATHER } from '../constants/actionConst'
import { historyWeatherUrl } from '../constants/apiUrl'


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
      console.log( "error at homeAction ------->" )
      console.log(err)
  })
  
}

function *getNextDate(){
  const today = new Date();
  today.setDate(today.getDate()-HISTORY_DAYS);
  for( let i = 0; i < HISTORY_DAYS; i++ ){
    yield  `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    today.setDate(today.getDate() + 1);
  }
  return ;
}
