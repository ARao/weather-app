import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './index';


describe('Error', () => {
  const errorCode = 400;
  let wrapper
  beforeEach( ()=>{
    wrapper = shallow(<Error errorCode={ errorCode } />);
  }) 
  
  it('++++ render Error', () => {

    expect(wrapper.length).toEqual(1);
  });
  it('++++ snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
});