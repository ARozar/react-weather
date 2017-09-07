import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {FiveDayForecastPage} from './index';

function setup(loading = true) {
  
  const props = {
    loading: loading,
    title: 'Glasgow',
    days: [[],[],[],[],[]],
    actions:{
        loadWeather:() =>{},
        selectDay:() =>{}
    },
    classes:{}
  };

  return shallow(<FiveDayForecastPage {...props} />);
}

describe('FiveDayForecastPage renders', () => {
  
  it('loading when loading', () => {
    const wrapper = setup();
   expect(wrapper.find('h1').text()).toEqual('loading...');
  });


});