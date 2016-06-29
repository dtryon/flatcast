import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import moment from 'moment';

import { FlatCast } from './FlatCast';

describe('FlatCast Component', () => {

    it('should cleanly render', () => {

        const component = mount(<FlatCast init={()=>{}}/>);

        expect(component).to.not.be.undefined;
    });

    describe('days', () => {

        it('should render days', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<FlatCast init={()=>{}} days={days}/>);

            const result = component.find('.FlatCast_day');
            expect(result.length).to.equal(2);
        });

        it('should render days name', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<FlatCast init={()=>{}} days={days}/>);

            const result = component.find('.FlatCast_day_name');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('Monday');
        });

        it('should render days weather', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<FlatCast init={()=>{}} days={days}/>);

            const result = component.find('.FlatCast_day_weather i')
            expect(result.first().hasClass('wi-owm-day-400')).to.be.true;
        });

        it('should render days temp', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<FlatCast init={()=>{}} days={days}/>);

            const result = component.find('.FlatCast_day_temp');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('23');
        });
    });

    describe('hours', () => {

        let dayWithHours;

        beforeEach(()=> {
            dayWithHours = {'Monday': { temp: 23, weather: 400, hours: [
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
            ]}};
        });

        it('should render hours time', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_time');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('12:00 PM');
        });

        it('should render hours weather', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_weather i');
            expect(result.length).to.equal(2);
            expect(result.first().hasClass('wi-owm-day-100')).to.be.true;
        });

        it('should render hours temp', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_temp');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('10');
        });

        it('should render hours temp high and temp low', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_temp_hilo');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('10');
            expect(result.first().text()).to.contain('9');
        });

        it('should render hours wind direction', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_wind_direction i');
            expect(result.length).to.equal(2);
            expect(result.first().hasClass('towards-100-deg')).to.be.true;
        });

        it('should render hours wind speed', () => {

            const component = mount(<FlatCast init={()=>{}} days={dayWithHours} selectedDay='Monday'/>);

            const result = component.find('.FlatCast_hour_wind_speed');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('1.11');
        });
    });
});
