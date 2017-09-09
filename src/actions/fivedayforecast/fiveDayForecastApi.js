import Moment from 'moment';

import { updateStorage, getForeCast, isNotExpired, FORECAST_KEY } from './forecastStorage';

export async function getFiveDayForecast() {
    const currentForecast = getForeCast(FORECAST_KEY);
    
    if(currentForecast && isNotExpired(currentForecast)){
        return await Promise.resolve(currentForecast)
    }

    //obviously wouldn't include api key in a real app
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=3333231&units=metric&appid=d2d1332dd8ee56b14c75b80ca8c13909`)
           .then((response)=>response.json())
           .then((forecast)=>Object.assign({},forecast,{ lastUpdated: Moment.utc().toISOString() }))
           .then(updateStorage);
}