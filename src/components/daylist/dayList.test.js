import React from 'react';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';
import DayList from './index';

describe('DayList', () => {

    let props = {};

    const setupDayList = (props) => mount(<DayList {...props} />);

    beforeEach(() => {
        props = {
            loading: false,
            title: 'Glasgow',
            days: [[{}], [{}], [{}], [{}], [{}]],
            selectDay: jest.fn()
        };
    });

    it('renders correct number of list items', () => {

        const component = setupDayList(props);

        expect(component.find('li').length).toBe(props.days.length);
    })

    it('list item calls selectDay on click with selected day', () => {

        const testDayValue = 'testVal';

        const testDay = [{dayInMonth: testDayValue}];

        props.days[0] = testDay;

        const component = setupDayList(props);

        component.find('li').first().simulate('click');

        expect(props.selectDay.mock.calls.length).toBe(1);
        expect(props.selectDay.mock.calls[0][0]).toBe(testDayValue);
        
    })
});