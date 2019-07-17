import React from 'react';
import { shallow } from 'enzyme';
import ConnectedHome from './index';
import { Home } from './index'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toJson from 'enzyme-to-json'
import current from '../../__testData__/current.json'
import forecast from '../../__testData__/forecast.json'


const fetchCurrent = jest.fn( )
const fetchForecast = jest.fn( )
const loaderShow = jest.fn()
const loaderHide = jest.fn()

const props = {
  fetchCurrent,
  fetchForecast,
  loaderHide,
  loaderShow
}

describe('Home connectd component', () => {

  const initialState = {
    weather: {
      forecast,
      current,
    }
  }
  const mockStore = configureStore([thunk]);
  let wrapper, store;


  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedHome store={ store } {...props} />)
  })


  afterEach( () => {
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

  it('++++ fetchForecast called', () =>{
    wrapper = shallow(<Home {...props} />)
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'fetchForecast');
    expect(spy).toHaveBeenCalled();
  })

  it('++++ fetchCurrent called', () =>{
    wrapper = shallow(<Home {...props}/>)
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'fetchCurrent' );
    expect(spy).toHaveBeenCalled();
  })
});
