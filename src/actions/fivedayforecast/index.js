import fp from 'lodash/fp';
import Moment from 'moment';
import { beginAjaxCall, ajaxCallError } from '../ajaxstatus';
import { getFiveDayForecast } from './fiveDayForecastApi';

export const LOAD_FIVEDAY_FORECAST_SUCCESS = 'LOAD_FIVEDAY_FORECAST_SUCCESS';
export const SELECT_DAY = 'SELECT_DAY';


export const loadFiveDayForecastSuccess = (fiveDayForecast) => {
  return { type: LOAD_FIVEDAY_FORECAST_SUCCESS, fiveDayForecast };
};

export const selectDay = (dayInMonth) => {
  return { type: SELECT_DAY, dayInMonth }
}

export const loadWeather = () => {
  //return thunk
  return async (dispatch) => {

    dispatch(beginAjaxCall());
    try {
      const fiveDayForecast = await getFiveDayForecast();

      const unMapped3hourBlocks = fiveDayForecast.list || [];

      const dayMapper = fp.flow(
        //convert to friendly object
        fp.map((value, index) => {

          const { description, icon } = (value.weather && value.weather.length) ? value.weather[0] : {};

          return {
            id: index,
            time: Moment(value.dt_txt).format('HH:00'),
            day: Moment(value.dt_txt).format('Do'),
            dayInMonth: Moment(value.dt_txt).format('Do MMMM'),
            temp: (value.main) ? value.main.temp : '',
            description: description,
            icon: `http://openweathermap.org/img/w/${icon}.png`
          };
        }),
        fp.groupBy('day'),
        fp.values
      );

      const groupedByDay = dayMapper(unMapped3hourBlocks);

      const forecast = {
        days: groupedByDay,
        selectedDay: (groupedByDay && groupedByDay.length) ? groupedByDay[0] : null,
        title: (fiveDayForecast.city) ? fiveDayForecast.city.name : null
      };

      dispatch(loadFiveDayForecastSuccess(forecast));
      
    } catch (e) {
      ajaxCallError(e);
    }
  }
}