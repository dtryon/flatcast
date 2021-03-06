import React from 'react';

import { connect } from 'react-redux';

import { getForecastForCity, selectDay } from '../actions/fiveDay';
import { getDays, getSelectedDay, getCity } from '../reducers/flatCast';

import DayBreakdown from './DayBreakdown';
import HourBreakdown from './HourBreakdown';

export class FlatCast extends React.Component {
    componentDidMount() {
        this.props.init('london,gb');
    }

    render() {
        const { days, selectedDay, city } = this.props;
        return <section className="FlatCast">
            <div className="grid">
                <div className="grid-row">
                    <div className="FlatCast_city grid-col-xs-12 grid-col-md-6">
                        <h2 className="FlatCast_city_value">{city}</h2>
                    </div>
                    <div className="grid-col-xs-12 grid-col-md-6">
                        <input className="FlatCast_city_input" placeholder="city - countryCode" type="text" defaultValue={city} ref="cityInput"/>
                        <button className="FlatCast_city_submit" onClick={() => this.props.changeCity(this.refs.cityInput.value)}>Get Flatcast</button>
                    </div>
                </div>
            </div>
            <div className="FlatCast_5day grid">
                <DayBreakdown {...this.props} />
                { days && days[selectedDay] && <HourBreakdown hours={days[selectedDay].hours}/> }
            </div>
        </section>;
    }
}

const mapStateToProps = state => ({ 
    days: getDays(state),
    selectedDay: getSelectedDay(state),
    city: getCity(state)
});

const mapDispatchToProps = dispatch => ({
    init: (city) => dispatch(getForecastForCity(city)),
    selectDay: (day) => dispatch(selectDay(day)),
    changeCity: (city) => dispatch(getForecastForCity(city))
});
export default connect(mapStateToProps, mapDispatchToProps)(FlatCast);
