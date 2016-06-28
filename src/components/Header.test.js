import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Header from './Header';

describe('Header Component', () => {

    it('should cleanly render', () => {

        const component = mount(<Header />);

        expect(component).to.not.be.undefined;

    });
});

