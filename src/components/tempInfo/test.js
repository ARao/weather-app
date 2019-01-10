import React from 'react';
import TempInfo from './index'
import { shallow } from 'enzyme'

describe('HistoryTable', () => {
    
    const weather = {
        "last_updated_epoch": 1547153112,
        "last_updated": "2019-01-10 21:45",
        "temp_c": 4,
        "temp_f": 39.2,
        "is_day": 0,
    }

    it('++++ render Temp info', () => {
      let wrapper = shallow(<TempInfo weather = {weather} />);  
      expect(wrapper.length).toEqual(1);
    });
    
    it('++++ snapshot match', () => {
        let wrapper = shallow(<TempInfo weather ={ weather }/>); 
        expect(wrapper).toMatchSnapshot();
    }); 
  });