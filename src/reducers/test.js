import reducer from './index'
import { CURRENT_WEATHER, FORECAST_WEATHER, HISTORY_WEATHER } from '../constants/actionConst';
import forecast from '../__testData__/forecast.json'
import current from '../__testData__/current.json'
import history from '../__testData__/history.json'


describe("Reducer testcase ", () => {

    const histories = [history]
    let initialState;
    beforeEach(() => {
        initialState = {
        };
    })

    it(`++++ reducer for ${CURRENT_WEATHER}`, () => {
        const state = reducer(initialState, { type: CURRENT_WEATHER, payload: current })
        expect(state.weather.current).toEqual(current);
    })
    it(`++++ reducer for ${FORECAST_WEATHER}`, () => {
        const state = reducer(initialState, { type: FORECAST_WEATHER, payload: forecast })
        expect(state.weather.forecast).toEqual(forecast);
    })
    it(`++++ reducer for ${HISTORY_WEATHER}`, () => {
        const state = reducer(initialState, { type: HISTORY_WEATHER, payload: histories })
        expect(state.weather.histories).toEqual(histories);
    })
})
