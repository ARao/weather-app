import { CURRENT_WEATHER, FORECAST_WEATHER, HISTORY_WEATHER, LOADER } from '../constants/actionConst';
import interceptor from '../interceptor'

const initialState = {
  current: {},
  forecast: {},
  histories: [],
  interceptor,
  loader : false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload,
        interceptor : action.interceptor
      };
    case FORECAST_WEATHER:
      return {
        ...state,
        forecast: action.payload,
        interceptor : action.interceptor
      };
    case HISTORY_WEATHER:
      return {
        ...state,
        histories: action.payload,
        interceptor : action.interceptor
      };
    case LOADER : 
      return {
        ...state,
        loader : action.loader
      };
    default:
      return state;
  }
}
