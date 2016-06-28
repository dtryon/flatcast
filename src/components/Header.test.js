import React from 'react';
import { expect } from 'chai';
import { renderIntoDocument } from 'react-addons-test-utils';

import Header from './Header';

describe('Header Component', () => {

    it('should cleanly render', () => {

        const component = renderIntoDocument(<Header />);

        expect(component).to.not.be.undefined;

    });
});

