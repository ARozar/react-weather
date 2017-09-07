import * as types from '../actions/fivedayforecast';
import initialState from './initialState';

export default function fiveDayForecast(state = initialState.fiveDayForecast, action) {
  switch (action.type) {
    case types.LOAD_FIVEDAY_FORECAST_SUCCESS:
      return Object.assign({}, action.fiveDayForecast);
    case types.SELECT_DAY:
      return Object.assign({}, state, { selectedDay: state.days.find(d => (d[0].dayInMonth === action.dayInMonth))} );
    default:
      return state;
  }
}
