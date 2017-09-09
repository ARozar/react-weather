import Moment from 'moment';

export const FORECAST_KEY = 'Forecast';

export const retryPeriod = 10;//based on recommendation on https://openweathermap.org/appid

export const updateStorage = (forecast) =>{
    localStorage.setItem(FORECAST_KEY, JSON.stringify(forecast));
    return forecast;
};

export const getForeCast = (key) =>{ 
    return JSON.parse(localStorage.getItem(key));
};

export const isNotExpired = (forecast) => {
    const dateSet = Moment.utc(forecast.lastUpdated);
    
    return dateSet.add(retryPeriod,'minute').isAfter(Moment.utc());
};