import React from 'react';

import { connect } from 'react-redux';

import { getForecastForCity, selectDay } from '../actions/fiveDay';
import { getDays, getSelectedDay } from '../reducers/flatCast';

export class FlatCast extends React.Component {
    componentDidMount() {
        this.props.init('london,uk');
    }

    render() {
        const { days, selectedDay } = this.props;
        return <div className="FlatCast">
            <h2>London - Gb</h2>
            <div className="FlatCast_5day grid">
                <div className="FlatCast_days grid-row">
                    <div className="grid-col-md-1"></div>
                    { days && Object.keys(days).map((day, i) => {
                        const activeClass = selectedDay === day ? 'active' : '';
                        return <div key={'day'+i} className={"FlatCast_day grid-col-xs-12 grid-col-md-2" + " " + activeClass}
                            onClick={() => this.props.selectDay(day)}>
                            <p className="FlatCast_day_name">
                                { day }
                            </p>
                            <p className="FlatCast_day_weather">
                                <i className={"wi wi-owm-day-" + days[day].weather}></i>
                            </p>
                            <p className="FlatCast_day_temp">
                                {days[day].temp}&#176;C
                            </p>
                        </div>;
                    })}
                </div>
                <div className="grid_row">
                    <div className="FlatCast_hours grid-col-md-12 grid">
                        <div className="grid-row">
                            { days && days[selectedDay] && days[selectedDay].hours.map((hour, i) => {
                                let mdColClass = 'grid-col-md-1';
                                if (i > 3) {
                                    mdColClass = 'grid-col-md-1';
                                }
                                return <div key={'hour'+i} className={"FlatCast_hour grid-col-xs-12 " + mdColClass}>
                                    <p className="FlatCast_hour_time">
                                        { hour.time.format('LT')}
                                    </p>
                                    <p className="FlatCast_hour_weather">
                                        <i className={"wi wi-owm-day-" + hour.weather}></i>
                                    </p>
                                    <p className="FlatCast_hour_temp">
                                        { hour.temp }&#176;C
                                    </p>
                                    <p className="FlatCast_hour_temp_hilo">
                                        { hour.tempHigh }&#176;C<br/>
                                        { hour.tempLow }&#176;C<br/>
                                    </p>
                                    <p className="FlatCast_hour_wind_direction">
                                        <i className={"wi wi-wind towards-" + hour.windDirection + "-deg"}></i>
                                    </p>
                                    <p className="FlatCast_hour_wind_speed">
                                        { hour.windSpeed }
                                    </p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ days: getDays(state), selectedDay: getSelectedDay(state) });
const mapDispatchToProps = dispatch => ({ init: (city) => dispatch(getForecastForCity(city)), selectDay: (day) => dispatch(selectDay(day))});
export default connect(mapStateToProps, mapDispatchToProps)(FlatCast);
