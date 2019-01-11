import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './index';


describe('Error', () => {
  const errorCode = 400;
  let wrapper
  const history = { push: jest.fn() }

  beforeEach(() => {
    wrapper = shallow(<Error history={history} />);
  })

  it('++++ render Error', () => {

    expect(wrapper.length).toEqual(1);
  });
  it('++++ snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('++++ should redirect', () => {
    expect(history.push.mock.calls[0]).toEqual(['/']);
  })

});
