import React from 'react';
import { shallow } from 'enzyme';
import { BasicInfo } from './index';


describe('Basic', () => {
  const weather = {
    "location": {
      "name": "Paris",
      "region": "Ile-de-France",
      "country": "France",
      "lat": 48.87,
      "lon": 2.33,
      "tz_id": "Europe/Paris",
      "localtime_epoch": 1547152354,
      "localtime": "2019-01-10 21:32"
    }
  }
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<BasicInfo weather={weather} />);
  })

  it('++++ render Basic', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('++++ snapshot match ', () => {

    expect(wrapper).toMatchSnapshot();
  });
});
