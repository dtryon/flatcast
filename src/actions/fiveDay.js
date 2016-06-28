
async function fetchForecaseForCity(city) {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&mode=json&APPID=d1c265b8f833522f6ec0797595de17a7', { method: 'get', accept: 'application/json'});
    const json = await response.json();
    return json;
}

export const getForecastForCity = (city) => {
    return async (dispatch) => {
        try {
            const response = await fetchForecaseForCity(city);
            dispatch(forecastForCityRecieved(response));
        } catch(err) {
            dispatch(forecastForCityFailed(err));
        }
    }
};

export const forecastForCityRecieved = (response) => {
    return {
        type: 'FLATCAST_FORECAST_RECEIVED',
        response
    };
}

export const forecastForCityFailed = (err) => {
    return {
        type: 'FLATCAST_FORECAST_FAILED',
        message: err || 'something went wrong.'
    };
}

export const selectDay = (selectedDay) => {
    return {
        type: 'FLATCAST_DAY_SELECTED',
        selectedDay
    }
}
