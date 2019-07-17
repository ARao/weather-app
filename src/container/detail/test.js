import React from 'react';
import { shallow } from 'enzyme';
import ConnectedDetail from './index';
import { Detail } from './index'
import configureStore from 'redux-mock-store'
import forecast from '../../__testData__/forecast.json'
import toJson from 'enzyme-to-json'

const fetchForecast = jest.fn()

describe('Detail', () => {

  const mockStore = configureStore();
  let wrapper, store;
  const initialState = {
    weather: {
      forecast
    }
  }

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedDetail store={store} fetchForecast={fetchForecast} match={{ params: { id: 1 } }} />)
  })

  afterEach(() => {
  })

  it('++++ render the connected(SMART) component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('++++ store should match with value currentWeather', () => {
    expect(wrapper.props().currentWeather).toEqual(initialState.weather.current)
  });

  it('++++ store should match with value forecastWeather', () => {
    expect(wrapper.props().forecastWeather).toEqual(initialState.weather.forecast)
  });

  it('+++ snapshot match', () => {
    const snap = toJson(wrapper.dive());
    expect(snap).toMatchSnapshot();
  });
  // it('++++ fetchForecast called', () =>{
  //   wrapper = shallow(<Detail fetchForecast={ fetchForecast } match={{ params : { id: 1 }}} />)
  //   const instance = wrapper.instance();
  //   console.log('instance.props.forecastWeather', instance.props.forecastWeather)
  //   const spy = jest.spyOn(instance.props, 'fetchForecast');
  //   expect(spy).toHaveBeenCalled();
  // })
});
