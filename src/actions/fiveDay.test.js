import React from 'react';
import { expect } from 'chai';
import nock from 'nock';
import sinon from 'sinon';

import * as actions from './fiveDay';

describe('fiveDay actions', () => {

    it('should select day', () => {

        const target = actions.selectDay('foo');
        expect(target.selectedDay).to.equal('foo');
    });

    describe('fetch forecast', () => {

        afterEach(() => {

            nock.cleanAll();
        });

        it('getForecast is successful', async () => {
            const dispatch = sinon.spy();
            const city = 'london,uk';
            const url = '/data/2.5/forecast?q=' + city + '&units=metric&mode=json&APPID=d1c265b8f833522f6ec0797595de17a7';

            nock('http://api.openweathermap.org')
            .get(url)
            .reply(200, {value:'foo'});

            await actions.getForecastForCity('london,uk')(dispatch);

            expect(dispatch.args[0][0].type).to.equal(actions.forecastForCityRecieved().type);
            expect(dispatch.args[0][0].response.value).to.equal('foo');
        });

        it('getForecast failed', async () => {
            const dispatch = sinon.spy();
            const city = 'london,uk';
            const url = '/data/2.5/forecast?q=' + city + '&units=metric&mode=json&APPID=d1c265b8f833522f6ec0797595de17a7';

            nock('http://api.openweathermap.org')
            .get(url)
            .reply(500);

            await actions.getForecastForCity('london,uk')(dispatch);

            expect(dispatch.args[0][0].type).to.equal(actions.forecastForCityFailed().type);
        });
    });
});
