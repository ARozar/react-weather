import Moment from 'moment';

const FORECAST_KEY = 'Forecast';

const retryPeriod = 10;//based on recommendation on https://openweathermap.org/appid

const updateStorage = (forecast) =>{
    localStorage.setItem(FORECAST_KEY, JSON.stringify(forecast));
    return forecast;
};


const getForeCast = (key) =>{ 
    return JSON.parse(localStorage.getItem(key));
};

const isNotExpired = (forecast) => {
    const dateSet = Moment.utc(forecast.lastUpdated);
    
    return dateSet.add(retryPeriod,'minute').isAfter(Moment.utc());
};

export async function getFiveDayForecast() {
    const currentForecast = getForeCast(FORECAST_KEY);

    if(currentForecast && isNotExpired(currentForecast)){
        return await Promise.resolve(currentForecast)
    }

    //obviously wouldn't include api key in a real app
    return await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=3333231&units=metric&appid=d2d1332dd8ee56b14c75b80ca8c13909`)
           .then((response)=>response.json())
           .then((forecast)=>Object.assign({},forecast,{ lastUpdated: Moment.utc().toISOString() }))
           .then(updateStorage);
}