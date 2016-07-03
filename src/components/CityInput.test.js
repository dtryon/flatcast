import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import CityInput from './CityInput';

describe('CityInput Component', () => {

    it('should render without issues', () => {

        const component = mount(<CityInput/>);

        expect(component).to.not.be.undefined;
    });


    it ('should render out input', () => {

        const component = mount(<CityInput/>);

        const target = component.find('input');

        expect(target.length).to.equal(1);
    });

});
