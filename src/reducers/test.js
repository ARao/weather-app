import reducer from './index'
import { CURRENT_WEATHER, FORECAST_WEATHER, HISTORY_WEATHER } from '../constants/actionConst';

const current ={
    "location": {
        "name": "Paris",
        "region": "Ile-de-France",
        "country": "France",
        "lat": 48.87,
        "lon": 2.33,
        "tz_id": "Europe/Paris",
        "localtime_epoch": 1547158515,
        "localtime": "2019-01-10 23:15"
    },
    "current": {
        "last_updated_epoch": 1547157617,
        "last_updated": "2019-01-10 23:00",
        "temp_c": 4,
        "temp_f": 39.2,
        "is_day": 0,
        "condition": {
            "text": "Overcast",
            "icon": "//cdn.apixu.com/weather/64x64/night/122.png",
            "code": 1009
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 10,
        "wind_dir": "N",
        "pressure_mb": 1028,
        "pressure_in": 30.8,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 70,
        "cloud": 100,
        "feelslike_c": 2.3,
        "feelslike_f": 36.1,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 0
    }
}

const forecast = {
    "location": {
        "name": "Paris",
        "region": "Ile-de-France",
        "country": "France",
        "lat": 48.87,
        "lon": 2.33,
        "tz_id": "Europe/Paris",
        "localtime_epoch": 1547158588,
        "localtime": "2019-01-10 23:16"
    },
    "current": {
        "last_updated_epoch": 1547157617,
        "last_updated": "2019-01-10 23:00",
        "temp_c": 4,
        "temp_f": 39.2,
        "is_day": 0,
        "condition": {
            "text": "Overcast",
            "icon": "//cdn.apixu.com/weather/64x64/night/122.png",
            "code": 1009
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 10,
        "wind_dir": "N",
        "pressure_mb": 1028,
        "pressure_in": 30.8,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 70,
        "cloud": 100,
        "feelslike_c": 2.3,
        "feelslike_f": 36.1,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 0
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2019-01-10",
                "date_epoch": 1547078400,
                "day": {
                    "maxtemp_c": 5,
                    "maxtemp_f": 41,
                    "mintemp_c": 3.8,
                    "mintemp_f": 38.8,
                    "avgtemp_c": 3.6,
                    "avgtemp_f": 38.5,
                    "maxwind_mph": 8.1,
                    "maxwind_kph": 13,
                    "totalprecip_mm": 0.1,
                    "totalprecip_in": 0,
                    "avgvis_km": 18.2,
                    "avgvis_miles": 11,
                    "avghumidity": 70,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 0.7
                },
                "astro": {
                    "sunrise": "08:42 AM",
                    "sunset": "05:15 PM",
                    "moonrise": "11:10 AM",
                    "moonset": "09:41 PM"
                }
            },
            {
                "date": "2019-01-11",
                "date_epoch": 1547164800,
                "day": {
                    "maxtemp_c": 7.8,
                    "maxtemp_f": 46,
                    "mintemp_c": 6.2,
                    "mintemp_f": 43.2,
                    "avgtemp_c": 5.7,
                    "avgtemp_f": 42.2,
                    "maxwind_mph": 8.5,
                    "maxwind_kph": 13.7,
                    "totalprecip_mm": 2.4,
                    "totalprecip_in": 0.09,
                    "avgvis_km": 15.3,
                    "avgvis_miles": 9,
                    "avghumidity": 87,
                    "condition": {
                        "text": "Light rain",
                        "icon": "//cdn.apixu.com/weather/64x64/day/296.png",
                        "code": 1183
                    },
                    "uv": 0.4
                },
                "astro": {
                    "sunrise": "08:41 AM",
                    "sunset": "05:16 PM",
                    "moonrise": "11:34 AM",
                    "moonset": "10:44 PM"
                }
            },
            {
                "date": "2019-01-12",
                "date_epoch": 1547251200,
                "day": {
                    "maxtemp_c": 8.3,
                    "maxtemp_f": 46.9,
                    "mintemp_c": -0.2,
                    "mintemp_f": 31.6,
                    "avgtemp_c": 5.8,
                    "avgtemp_f": 42.5,
                    "maxwind_mph": 13,
                    "maxwind_kph": 20.9,
                    "totalprecip_mm": 4.9,
                    "totalprecip_in": 0.19,
                    "avgvis_km": 16.1,
                    "avgvis_miles": 9,
                    "avghumidity": 86,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 0.4
                },
                "astro": {
                    "sunrise": "08:41 AM",
                    "sunset": "05:17 PM",
                    "moonrise": "11:55 AM",
                    "moonset": "11:48 PM"
                }
            },
            {
                "date": "2019-01-13",
                "date_epoch": 1547337600,
                "day": {
                    "maxtemp_c": 10.5,
                    "maxtemp_f": 50.9,
                    "mintemp_c": 3.6,
                    "mintemp_f": 38.5,
                    "avgtemp_c": 8.7,
                    "avgtemp_f": 47.7,
                    "maxwind_mph": 15.2,
                    "maxwind_kph": 24.5,
                    "totalprecip_mm": 3.8,
                    "totalprecip_in": 0.15,
                    "avgvis_km": 16.9,
                    "avgvis_miles": 10,
                    "avghumidity": 83,
                    "condition": {
                        "text": "Light rain",
                        "icon": "//cdn.apixu.com/weather/64x64/day/296.png",
                        "code": 1183
                    },
                    "uv": 0.5
                },
                "astro": {
                    "sunrise": "08:40 AM",
                    "sunset": "05:19 PM",
                    "moonrise": "12:16 PM",
                    "moonset": "No moonset"
                }
            },
            {
                "date": "2019-01-14",
                "date_epoch": 1547424000,
                "day": {
                    "maxtemp_c": 8.5,
                    "maxtemp_f": 47.3,
                    "mintemp_c": 5.1,
                    "mintemp_f": 41.2,
                    "avgtemp_c": 7.7,
                    "avgtemp_f": 45.9,
                    "maxwind_mph": 14.8,
                    "maxwind_kph": 23.8,
                    "totalprecip_mm": 1.3,
                    "totalprecip_in": 0.05,
                    "avgvis_km": 17.5,
                    "avgvis_miles": 10,
                    "avghumidity": 70,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 0.7
                },
                "astro": {
                    "sunrise": "08:40 AM",
                    "sunset": "05:20 PM",
                    "moonrise": "12:38 PM",
                    "moonset": "12:53 AM"
                }
            }
        ]
    }
} 
const  histories = [{
    "forecast": {
      "forecastday": [
        {
            "date": "2019-01-03",
            "date_epoch": 1546473600,
            "day": {
                "maxtemp_c": 23.5,
                "mintemp_c": 14.9,
                "mintemp_f": 58.8,
              }
            }
          ]
        }
      }  
    ]


describe("Reducer testcase " , ()=>{
    
    let initialState ;
    beforeEach(()=>{
        initialState = {
            current : {},
            forecast: {},
            histories: [],
        };
    })

    it(`++++ reducer for ${CURRENT_WEATHER}`,()=>{
        const state = reducer(initialState, { type : CURRENT_WEATHER, payload : current })
        expect(state.weather.current).toEqual(current);
    })
    it(`++++ reducer for ${FORECAST_WEATHER}`,()=>{
        const state = reducer(initialState, {type : FORECAST_WEATHER, payload : forecast })
        expect(state.weather.forecast).toEqual(forecast);
    })
    it(`++++ reducer for ${HISTORY_WEATHER}`,()=>{
        const state = reducer(initialState, {type : HISTORY_WEATHER, payload : histories })
        expect(state.weather.histories).toEqual(histories);
    })
})