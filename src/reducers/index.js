import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import fiveDayForecast from './fiveDayForecastReducer';
import ajaxStatus from './ajaxStatusReducer';


export default combineReducers({
  router: routerReducer,
  ajaxStatus,
  fiveDayForecast
})
