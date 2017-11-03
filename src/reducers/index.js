import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import fiveDayForecast from './fiveDayForecastReducer';
import characters from './charactersReducer';
import ajaxStatus from './ajaxStatusReducer';


export default combineReducers({
  router: routerReducer,
  ajaxStatus,
  fiveDayForecast,
  characters
})
