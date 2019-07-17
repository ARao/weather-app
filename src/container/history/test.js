import React from 'react';
import { shallow } from 'enzyme';
import ConnectedHistory from './index';
import { History } from './index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toJson from 'enzyme-to-json'
import history from '../../__testData__/history.json'

describe('History connectd component', () => {
  const fetchHistories = jest.fn(()=>Promise.resolve())

  const loaderShow = jest.fn();
  const loaderHide = jest.fn();

  const props = {
    fetchHistories,
    loaderShow,
    loaderHide
  }

  const initialState = {
    weather: {
      histories: [history]
    }
  }

  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares);
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedHistory store={store} {...props} />)
  })

  it('++++ render the connected(SMART) component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('++++ store should match', () => {
    expect(wrapper.props().histories).toEqual(initialState.weather.histories)
  });

  it('+++ snapshot match', () => {
    const snap = toJson(wrapper.dive());
    expect(snap).toMatchSnapshot();
  });
  it('++++ fetchHistories called', () =>{
    wrapper = shallow(<History { ...props } />)
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'fetchHistories');
    expect(spy).toHaveBeenCalled();
  })
  
  
});
