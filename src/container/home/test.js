import React from 'react';
import { shallow } from 'enzyme';
import ConnectdHome from './index';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toJson from 'enzyme-to-json'
import current from '../../__testData__/current.json'
import forecast from '../../__testData__/forecast.json'
// import { fetchHistories } from '../../actions/historyActions'



describe('Home connectd component', () => {
  const fetchCurrent = jest.fn();
  const fetchForecast = jest.fn();
  const middleware = [thunk]

  const initialState = {
    weather: {
      forecast,
      current,
    }
  }
  const mockStore = configureStore(middleware);
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectdHome store={store} fetchCurrent={fetchCurrent} fetchForecast={fetchForecast} />)
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
    const snap = toJson(wrapper.dive())
    expect(snap).toMatchSnapshot();
  });
});
