import React from 'react';

import { connect } from 'react-redux';

import { getForecastForCity, selectDay } from '../actions/fiveDay';
import { getDays, getSelectedDay, getCity } from '../reducers/flatCast';

import DayBreakdown from './DayBreakdown';
import HourBreakdown from './HourBreakdown';

export class FlatCast extends React.Component {
    componentDidMount() {
        this.props.init('london,uk');
    }

    render() {
        const { days, selectedDay, city } = this.props;
        return <div className="FlatCast">
            <h2>{city}</h2>
            <div className="FlatCast_5day grid">
                <DayBreakdown {...this.props} />
                { days && days[selectedDay] && <HourBreakdown hours={days[selectedDay].hours}/> }
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ 
    days: getDays(state),
    selectedDay: getSelectedDay(state),
    city: getCity(state)
});

const mapDispatchToProps = dispatch => ({
    init: (city) => dispatch(getForecastForCity(city)),
    selectDay: (day) => dispatch(selectDay(day))
});
export default connect(mapStateToProps, mapDispatchToProps)(FlatCast);
