import { expect } from 'chai';
import freeze from 'deep-freeze';

import reducer, { getSelectedDay, getDays } from './flatCast';
import * as actions from '../actions/fiveDay';

describe('flatcast state reducers and selectors', () => {

    describe('reducers for flatcast', () => {

        it('should receive forecast response', () => {

            const action = actions.forecastForCityRecieved('blah');

            const currentState = reducer();
            freeze(currentState);

            const nextState = reducer(currentState, action);

            expect(nextState.flatCast).to.equal('blah');
        });

        it('should set selected day to first day', () => {

            const response = { list: [{dt_txt: '2016-12-12 00:00:00'}, {dt_txt:'2016-12-13 00:00:00'}]}
            const action = actions.forecastForCityRecieved(response);

            const currentState = reducer();
            freeze(currentState);

            const nextState = reducer(currentState, action);

            expect(nextState.selectedDay).to.equal('Monday');
        });

        it('should set error message if forecast failed', () => {

            const action = actions.forecastForCityFailed('blah');

            const currentState = reducer();
            freeze(currentState);

            const nextState = reducer(currentState, action);

            expect(nextState.errorMessage).to.equal('blah');
        });

        it('should set selected day', () => {

            const action = actions.selectDay('blah');

            const currentState = reducer();
            freeze(currentState);

            const nextState = reducer(currentState, action);

            expect(nextState.selectedDay).to.equal('blah');
        });
    });

    describe('flatcast selectors', () => {

        it('should get selected day from state', () => {

            const state = { selectedDay: 'foob'};

            const target = getSelectedDay(state);

            expect(target).to.equal('foob');
        });

        let testResponse = { flatCast: {
                list: [
                    {
                        dt_txt: '2016-11-10 00:00:00',
                        weather: [ {id: 300} ],
                        main: {
                            temp: 34.44,
                            temp_min: 32.12,
                            temp_max: 34.44
                        },
                        wind: {
                            speed: 3.45,
                            deg: 123.54
                        }
                    },
                    {
                        dt_txt: '2016-11-10 00:10:00',
                        weather: [ {id: 300} ],
                        main: {
                            temp: 36.44,
                            temp_min: 35.12,
                            temp_max: 36.44
                        },
                        wind: {
                            speed: 3.45,
                            deg: 123.54
                        }
                    },
                    {
                        dt_txt: '2016-11-11 00:00:00',
                        weather: [ {id: 400} ],
                        main: {
                            temp: 44.44,
                            temp_min: 42.12,
                            temp_max: 44.44
                        },
                        wind: {
                            speed: 4.45,
                            deg: 145.54
                        }
                    },
                    {
                        dt_txt: '2016-11-12 00:00:00',
                        weather: [ {id: 500} ],
                        main: {
                            temp: 54.44,
                            temp_min: 52.12,
                            temp_max: 54.44
                        },
                        wind: {
                            speed: 5.45,
                            deg: 155.54
                        }
                    }
                ]
            }};

        it('should get days', () => {

            const target = getDays(testResponse);

            expect(Object.keys(target).length).to.equal(3);
        });

        it('should get days with high temp', () => {

            const target = getDays(testResponse);

            expect(target['Thursday'].temp).to.equal(36);
        });

        it('should get days with first weather', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].weather).to.equal(400);
        });

        it('should get hours with time', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].time.format('LT')).to.equal('12:00 AM');
        });

        it('should get hours with weather', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].weather).to.equal(400);
        });

        it('should get hours with temp', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].temp).to.equal(44.44);
        });

        it('should get hours with temp low', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].tempLow).to.equal(42.12);
        });

        it('should get hours with temp high', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].tempHigh).to.equal(44.44);
        });

        it('should get hours with wind direction', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].windDirection).to.equal(146);
        });

        it('should get hours with wind speed', () => {

            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].windSpeed).to.equal(4.45);
        });

        it('should get hours with default wind speed', () => {

            testResponse.flatCast.list[2].wind = null;
            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].windSpeed).to.equal(0);
        });

        it('should get hours with default wind direction', () => {

            testResponse.flatCast.list[2].wind = null;
            const target = getDays(testResponse);

            expect(target['Friday'].hours[0].windDirection).to.equal(0);
        });
    });
});
