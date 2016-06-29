import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import DayBreakdown from './DayBreakdown';

describe('DayBreakdown Component', () => {

    it('should cleanly render', () => {

        const component = mount(<DayBreakdown/>);

        expect(component).to.not.be.undefined;
    });

    describe('days', () => {

        it('should render days', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<DayBreakdown days={days}/>);

            const result = component.find('.FlatCast_day');
            expect(result.length).to.equal(2);
        });

        it('should render days name', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<DayBreakdown days={days}/>);

            const result = component.find('.FlatCast_day_name');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.equal('Monday');
        });

        it('should render days weather', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<DayBreakdown days={days}/>);

            const result = component.find('.FlatCast_day_weather i')
            expect(result.first().hasClass('wi-owm-day-400')).to.be.true;
        });

        it('should render days temp', () => {
            const days = {'Monday': { temp: 23, weather: 400}, 'Tuesday': { temp: 32, weather: 500}};
            const component = mount(<DayBreakdown days={days}/>);

            const result = component.find('.FlatCast_day_temp');
            expect(result.length).to.equal(2);
            expect(result.first().text()).to.contain('23');
        });
    });
});


