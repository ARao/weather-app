import React from 'react';
import TempInfo from './index'
import { shallow } from 'enzyme'
import weather from '../../__testData__/weather.json'


describe('HistoryTable', () => {
  it('++++ render Temp info', () => {
    let wrapper = shallow(<TempInfo weather={weather} />);
    expect(wrapper.length).toEqual(1);
  });

  it('++++ snapshot match', () => {
    let wrapper = shallow(<TempInfo weather={weather} />);
    expect(wrapper).toMatchSnapshot();
  });
});
