import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { FiveDayForecastPage, styles } from './index';

describe('FiveDayForecastPage renders', () => {

  let props = { };

  beforeEach(()=>{
    props = {
      loading: false,
      error: false,
      title: 'Glasgow',
      days: [[], [], [], [], []],
      selectedDay:[],
      actions: {
        loadWeather: () => { },
        selectDay: () => { }
      },
      classes: styles
    };
  });

  const setup = (props) => shallow(<FiveDayForecastPage {...props} />);
  
  it('loading when loading', () => {

    props.loading = true;

    const wrapper = setup(props);

    expect(wrapper.find('h1').text()).toEqual('loading...');
  });

  it('Error when Error', () => {

    props.error = true;

    const wrapper = setup(props);

    expect(wrapper.find('h1').text()).toEqual('Error');
  });

  it('renders correctly when loaded with no errors', () => {
    //this is to support the material ui button element in the dayList component
    const options = {createNodeMock:(element) => {
      if (element.type === 'li') {
        return {
          focus() {},
        };
      }
      return null;
    }};
    
    const tree = renderer.create(<FiveDayForecastPage {...props} />, options).toJSON();

    expect(tree).toMatchSnapshot();
  });
});