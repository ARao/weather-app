import React from 'react';
import HistoryTable from './index'
import { shallow } from 'enzyme'
import history from '../../__testData__/history.json'


describe('HistoryTable', () => {
  const histories = [history]

  it('++++ render History table', () => {
    let wrapper = shallow(<HistoryTable histories={histories} />);
    expect(wrapper.length).toEqual(1);
  });

  it('++++ snapshot match', () => {
    let wrapper = shallow(<HistoryTable histories={histories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
