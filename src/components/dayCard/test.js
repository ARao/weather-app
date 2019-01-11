import React from 'react';
import DayCard from './index'
import { shallow } from 'enzyme'
import day from '../../__testData__/day.json'


describe('DayCard', () => {

    it('++++ render Daycard with index 0', () => {
        let wrapper = shallow(<DayCard day={day} index={0} />);
        expect(wrapper.length).toEqual(1);
    });

    it('++++ render daycar  with index 1', () => {
        let wrapper = shallow(<DayCard day={day} index={1} />);
        expect(wrapper.length).toEqual(1);
    });

    it('++++ snapshot match', () => {
        let wrapper = shallow(<DayCard day={day} index={1} />);
        expect(wrapper).toMatchSnapshot();
    });
});
