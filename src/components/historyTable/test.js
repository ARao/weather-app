import React from 'react';
import HistoryTable from './index'
import { shallow } from 'enzyme'

describe('HistoryTable', () => {
    const histories = 
    [
        {
            "forecast": {
                "forecastday": [
                    {
                        "date": "2019-01-03",
                        "date_epoch": 1546473600,
                        "day": {
                            "maxtemp_c": 23.5,
                            "maxtemp_f": 74.3,
                            "mintemp_c": 14.9,
                            "mintemp_f": 58.8,
                            "avgtemp_c": 19.7,
                            "avgtemp_f": 67.4,
                            "maxwind_mph": 9.2,
                            "maxwind_kph": 14.8,
                            "totalprecip_mm": 0,
                            "totalprecip_in": 0,
                            "avgvis_km": 10,
                            "avgvis_miles": 6,
                            "avghumidity": 39,
                            "condition": {
                                "text": "Partly cloudy",
                                "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                                "code": 1003
                            },
                            "uv": 0
                        },
                    }
                ]
            }
        }
    ] 
    
    it('++++ render History table', () => {
      let wrapper = shallow(<HistoryTable histories = {histories} />);  
      expect(wrapper.length).toEqual(1);
    });
    
    it('++++ snapshot match', () => {
        let wrapper = shallow(<HistoryTable histories ={ histories }/>); 
        expect(wrapper).toMatchSnapshot();
    }); 
  });