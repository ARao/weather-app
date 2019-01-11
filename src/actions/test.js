import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchHistories } from './historyActions'
import { fetchCurrent, fetchForecast } from './homeActions'
import fetchMock from 'fetch-mock'
import { HISTORY_WEATHER, FORECAST_WEATHER, CURRENT_WEATHER } from '../constants/actionConst'
import { historyWeatherUrl, forecastWeatherUrl, currentWeatherUrl } from '../constants/apiUrl'
import { HISTORY_DAYS } from '../constants/appConst';
import currentData from '../__testData__/current.json'
import forecastData from '../__testData__/forecast.json'
import historyData from '../__testData__/history.json'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {

  afterEach(() => {
    fetchMock.restore()
  })


  it('++++ History action should work and api hits', async () => {

    fetchMock.get(`begin:${historyWeatherUrl.href}`, historyData)
    const expectedActions = {
      payload: Array.from({ length: HISTORY_DAYS }, () => historyData),
      type: HISTORY_WEATHER
    }

    const store = mockStore({});
    return store.dispatch(fetchHistories()).then(() => {
      expect(store.getActions()[0].payload).toEqual(expectedActions.payload)
      expect(store.getActions()[0].type).toEqual(expectedActions.type)
      expect(fetchMock.done()).toEqual(true);
    })
  })

  it('++++ forecast action should work and api hits', async () => {

    fetchMock.getOnce(`begin:${forecastWeatherUrl.href}`, forecastData)
    const expectedActions = {
      payload: forecastData,
      type: FORECAST_WEATHER
    }
    const store = mockStore({});

    return store.dispatch(fetchForecast()).then(() => {
      expect(store.getActions()[0].payload).toEqual(expectedActions.payload)
      expect(store.getActions()[0].type).toEqual(expectedActions.type)
      expect(fetchMock.done()).toEqual(true);
    })
  })

  it('++++ current action should work and api hits', async () => {

    fetchMock.getOnce(`begin:${currentWeatherUrl.href}`, currentData)
    const expectedActions = {
      payload: currentData,
      type: CURRENT_WEATHER
    }
    const store = mockStore({});

    return store.dispatch(fetchCurrent()).then(() => {
      expect(store.getActions()[0].payload).toEqual(expectedActions.payload)
      expect(store.getActions()[0].type).toEqual(expectedActions.type)
      expect(fetchMock.done()).toEqual(true);
    })
  })


})
