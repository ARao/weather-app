import React from 'react';
import ErrorView from './index'
import { shallow } from 'enzyme'


describe('ErrorView', () => {

  it('++++ render Error View', () => {
    let wrapper = shallow(<ErrorView status="404" statusText="NotFound" />);
    expect(wrapper.length).toEqual(1);
  });

  it('++++ snapshot match', () => {
    let wrapper = shallow(<ErrorView status="401" statusText="UnAuthorised" />);
    expect(wrapper).toMatchSnapshot();
  });
});
