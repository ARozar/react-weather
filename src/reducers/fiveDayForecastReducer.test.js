import fiveDayForecastReducer from './fiveDayForecastReducer';
import { LOAD_FIVEDAY_FORECAST_SUCCESS, SELECT_DAY } from '../actions/fivedayforecast';

describe('FiveDayForecast reducer', () => {

    it('succes returns forcast', () => {

        const fiveDayForecast = { days: [[], [], [], [], []] };
        const currentAction = { type: LOAD_FIVEDAY_FORECAST_SUCCESS, fiveDayForecast };

        const initialState = { days: [] };

        const newState = fiveDayForecastReducer(initialState, currentAction);

        expect(newState.days).toBe(fiveDayForecast.days);
    })

    it('select day returns selected day', () => {

        const selectedDay = [{dayInMonth:'today'}];

        const fiveDayForecast = { days: [[{}], [{}], [{}], [{}], selectedDay] };

        const currentAction = { type: SELECT_DAY, fiveDayForecast };

        const initialState = { days: [] };

        
        const newState = fiveDayForecastReducer(initialState, currentAction);

        expect(newState.selectedDay).toBe(fiveDayForecast.selectedDay);
    })
});