import { CURRENT_WEATHER, FORECAST_WEATHER, HISTORY_WEATHER } from '../constants/actionConst';


const initialState = {
  current : {},
  forecast: {},
  histories: [],
};

export default function(state = initialState, action) {
  // console.log(state, action)

  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload
      };
    case FORECAST_WEATHER:
      return {
        ...state,
        forecast: action.payload
      };
    case HISTORY_WEATHER:
      return {
        ...state,
        histories: action.payload
      };
    default:
      return state;
  }
}
