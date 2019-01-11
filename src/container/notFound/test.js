import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './index';


describe('Not Found', () => {
  const errorCode = 400;
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NotFound status="404" statusText="Not Found" />);
  })

  it('++++ render NotFound', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('++++ snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  });
});