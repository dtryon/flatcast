import React from 'react';

export default class FlatCast extends React.Component {
    render() {
        return <div className="FlatCast">
            <h2>London - Gb</h2>
            <div className="FlatCast_5day grid">
                <div className="FlatCast_days grid-row">
                    <div className="grid-col-md-1"></div>
                    <div className="FlatCast_day active grid-col-xs-12 grid-col-md-2">
                        <p className="FlatCast_day_name">
                            MONDAY
                        </p>
                        <p className="FlatCast_day_weather">
                            <i className="wi wi-owm-day-801"></i>
                        </p>
                        <p className="FlatCast_day_temp">
                            21&#176;C
                        </p>
                    </div>
                    <div className="FlatCast_day grid-col-xs-12 grid-col-md-2">
                        day 2
                    </div>
                    <div className="FlatCast_day grid-col-xs-12 grid-col-md-2">
                        day 3
                    </div>
                    <div className="FlatCast_day grid-col-xs-12 grid-col-md-2">
                        day 4
                    </div>
                    <div className="FlatCast_day grid-col-xs-12 grid-col-md-2">
                        day 5
                    </div>
                    <div className="grid-col-md-1"></div>
                </div>
                <div className="grid_row">
                    <div className="FlatCast_hours grid-col-md-12 grid">
                        <div className="grid-row">
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                <p className="FlatCast_hour_weather">
                                    <i className="wi wi-owm-day-801"></i>
                                </p>
                                <p className="FlatCast_hour_temp">
                                    21&#176;C
                                </p>
                                <p className="FlatCast_hour_temp_hilo">
                                    21&#176;C<br/>
                                    19&#176;C
                                </p>
                                <p className="FlatCast_hour_wind_direction">
                                    <i className="wi wi-wind towards-293-deg"></i>
                                </p>
                                <p className="FlatCast_hour_wind_speed">
                                    5.57
                                </p>
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                03:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                06:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                09:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                12:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                15:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                18:00
                            </div>
                            <div className="FlatCast_hour grid-col-xs-12 grid-col-md-1">
                                21:00
                            </div>
                            <div className="grid-col-xs-12 grid-col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
