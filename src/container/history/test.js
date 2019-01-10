import React from 'react';
import { shallow } from 'enzyme';
import ConnectedHistory from './index';
import configureStore from 'redux-mock-store'
// import { fetchHistories } from '../../actions/historyActions'



describe('History connectd component', () => {
   const fetchHistories = jest.fn()
  const initialState = {
    weather :{
      histories : [
        {
        "forecast": {
          "forecastday": [
            {
                "date": "2019-01-03",
                "date_epoch": 1546473600,
                "day": {
                    "maxtemp_c": 23.5,
                    "mintemp_c": 14.9,
                    "mintemp_f": 58.8,
                  }
                }
              ]
            }
          }  
        ]
      }
    }
  const mockStore  =  configureStore();
  let wrapper, store;
  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedHistory store={ store } fetchHistories={ fetchHistories } /> )
  })

  it('++++ render the connected(SMART) component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('++++ store should match', () => {
    expect(wrapper.props().histories ).toEqual(initialState.weather.histories)
  });

  it('+++ snapshot match', () => {
      const renderedValue =  shallow(<ConnectedHistory store={store} fetchHistories={ fetchHistories } />)
      expect(renderedValue).toMatchSnapshot();
  });
});