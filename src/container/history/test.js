import React from 'react';
import { shallow } from 'enzyme';
import ConnectedHistory from './index';
import { History } from './index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toJson from 'enzyme-to-json'
import history from '../../__testData__/history.json'

describe('History connectd component', () => {
  const fetchHistories = jest.fn()


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
    wrapper = shallow(<ConnectedHistory store={store} fetchHistories={ fetchHistories } />)
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
    wrapper = shallow(<History fetchHistories={ fetchHistories } />)
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'fetchHistories');
    expect(spy).toHaveBeenCalled();
  })
  
  
});
