import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import moment from 'moment';

import HourBreakdown from './HourBreakdown';

describe('HourBreakdown Component', () => {

    it('should cleanly render', () => {

        const component = mount(<HourBreakdown/>);

        expect(component).to.not.be.undefined;
    });

    describe('hours', () => {

        let hours;

        beforeEach(()=> {
            hours = [
                {
                    time: moment('2016-12-13 12:00:00'),
                    weather: 100,
                    temp: 10,
                    tempHigh: 10,
                    tempLow: 9,
                    windDirection: 100,
                    windSpeed: 1.11
                },
                {
                    time: moment('2016-12-13 03:00:00'),
                    weather: 200,
                    temp: 20,
                    tempHigh: 20,
                    tempLow: 19,
                    windDirection: 200,
                    windSpeed: 2.22
                }
            ];
        });

        it('should render hours time', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_time');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('12:00 PM');
        });

        it('should render hours weather', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_weather i');
            expect(result.length).to.equal(2);
            expect(result.first().hasClass('wi-owm-day-100')).to.be.true;
        });

        it('should render hours temp', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_temp');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('10');
        });

        it('should render hours temp high and temp low', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_temp_hilo');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('10');
            expect(result.first().text()).to.contain('9');
        });

        it('should render hours wind direction', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_wind_direction i');
            expect(result.length).to.equal(2);
            expect(result.first().hasClass('towards-100-deg')).to.be.true;
        });

        it('should render hours wind speed', () => {

            const component = mount(<HourBreakdown hours={hours} />);

            const result = component.find('.FlatCast_hour_wind_speed');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('1.11');
        });
    });
});

