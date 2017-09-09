import React from 'react';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';
import Day from './index';

describe('Day component', () => {

    let props = {};

    const setupDay = (props) => mount(<Day {...props} />);

    beforeEach(() => {
        props = {
            day: [{}, {}, {}],
        };
    });

    it('renders correct number of items', () => {

        const component = setupDay(props);

        expect(component.find('li').length).toBe(props.day.length);
    })


});