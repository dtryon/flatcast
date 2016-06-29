import React from 'react';

export default class HourBreakdown extends React.Component {

    static propTypes = {
        hours: React.PropTypes.array
    }

    static defaultProps = {
        hours: []
    }

    render() {
        const { hours } = this.props;
        return  <div className="FlatCast_hours grid-col-md-12 grid">
                    <div className="grid-row">
                        { hours.map((hour, i) => {
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
                </div>;
    }
}
