import React from 'react';
import DayCard from './index'
import { shallow } from 'enzyme'

describe('DayCard', () => {
    const day = 
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
        }
    } 
    
    it('++++ render Daycard with index 0', () => {
      let wrapper = shallow(<DayCard day={ day } index={ 0 } />);  
      expect(wrapper.length).toEqual(1);
    });

    it('++++ render daycar  with index 1', () => {
        let wrapper = shallow(<DayCard day={ day } index={ 1 } />);  
        expect(wrapper.length).toEqual(1);
    });
    
    it('++++ snapshot match', () => {
        let wrapper = shallow(<DayCard day={ day } index={ 1 } />); 
        expect(wrapper).toMatchSnapshot();
    }); 
  });