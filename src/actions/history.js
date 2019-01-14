import { CITY_NAME, KEY, HISTORY_DAYS } from '../constants/appConst';
import { HISTORY_WEATHER } from '../constants/actionConst'
import { historyWeatherUrl } from '../constants/apiUrl'
import interceptor from '../interceptor'


const historyWeatherUrlParam = new URL(historyWeatherUrl.href);

historyWeatherUrlParam.searchParams.append('key', 'q', 'dt')

export const fetchHistories = () => dispatch => {
  historyWeatherUrlParam.searchParams.set('key', KEY)
  historyWeatherUrlParam.searchParams.set('q', CITY_NAME)

  let arr = [];
  for (let day of getNextDate()) {
    historyWeatherUrlParam.searchParams.set('dt', day)
    arr.push(fetch(historyWeatherUrlParam.href))
  }

  return Promise.all(arr)
    .then(histories => Promise.all(histories.map(history => history.json())))
    .then(histories => {
      dispatch({
        type: HISTORY_WEATHER,
        payload: histories,
        interceptor
      });
    })
    .catch(err => {
      console.log("error at historyAction ------->")
      console.log(err)
    })

}

function* getNextDate() {
  const today = new Date();
  today.setDate(today.getDate() - HISTORY_DAYS);
  for (let i = 0; i < HISTORY_DAYS; i++) {
    yield `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    today.setDate(today.getDate() + 1);
  }
  return;
}
