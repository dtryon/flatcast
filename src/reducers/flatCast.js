import moment from 'moment';

export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'FLATCAST_FORECAST_RECEIVED':
            let selectedDay = '';
            if (action.response && action.response.list && action.response.list.length) {
               selectedDay = moment(action.response.list[0].dt_txt).format('dddd');
            }
            return {
                ...state,
                flatCast: action.response,
                selectedDay: selectedDay,
                errorMessage: null
            };
        case 'FLATCAST_FORECAST_FAILED':
            return {
                ...state,
                errorMessage: action.message
            };
        case 'FLATCAST_DAY_SELECTED':
            return {
                ...state,
                selectedDay: action.selectedDay
            }
        default:
            return state;
    }
}

export const getSelectedDay = (state) => {
    if (state.selectedDay) {
        return state.selectedDay;
    }
    return '';
}

export const getDays = (state) => {
    if (state.flatCast) {
        const flatCast = state.flatCast;
        return flatCast.list.reduce((acc, next) => {
            const theDate = moment(next.dt_txt);
            const dayOfWeek = theDate.format('dddd');

            if (!acc[dayOfWeek]) {
                acc[dayOfWeek] = {
                    weather: next.weather[0].id,
                    temp: Math.round(next.main.temp),
                    hours: []
                };
            }

            if (acc[dayOfWeek].temp < next.main.temp) {
                acc[dayOfWeek].temp = Math.round(next.main.temp);
            }

            acc[dayOfWeek].hours.push({
                time: moment(next.dt_txt),
                weather: next.weather[0].id,
                temp: next.main.temp,
                tempLow: next.main.temp_min,
                tempHigh: next.main.temp_max,
                windDirection: next.wind ? Math.round(next.wind.deg) : 0,
                windSpeed: next.wind ? next.wind.speed : 0
            });

            return acc;

        }, {});
    }
    return {};
}

