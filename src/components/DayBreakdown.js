import React from 'react';

export default class DayBreakdown extends React.Component {

    static propTypes = {
        days: React.PropTypes.object.isRequired,
        selectedDay: React.PropTypes.string,
        selectDay: React.PropTypes.func.isRequired
    }

    render() {
        const { days, selectedDay } = this.props;
        return (<div className="FlatCast_days grid-row">
            <div className="grid-col-md-1"></div>
            { days && Object.keys(days).map((day, i) => {
                const activeClass = selectedDay === day ? 'active' : '';
                return <div key={'day'+i} className={"FlatCast_day grid-col-xs-12 grid-col-md-2" + " " + activeClass}
                    onClick={() => this.props.selectDay(day)}>
                    <h3 className="FlatCast_day_name">
                        { day }
                    </h3>
                    <p className="FlatCast_day_weather">
                        <i className={"wi wi-owm-day-" + days[day].weather}></i>
                    </p>
                    <p className="FlatCast_day_temp">
                        {days[day].temp}&#176;C
                    </p>
                </div>;
            })}
        </div>);
    }
}
