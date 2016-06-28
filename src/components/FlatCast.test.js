import React from 'react';
import { expect } from 'chai';
import { renderIntoDocument } from 'react-addons-test-utils';

import FlatCast from './FlatCast';

describe('FlatCast Component', () => {

    it('should cleanly render', () => {

        const component = renderIntoDocument(<FlatCast />);

        expect(component).to.not.be.undefined;

    });
});
