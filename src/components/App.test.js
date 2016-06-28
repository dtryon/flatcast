import React from 'react';
import { expect } from 'chai';
import { renderIntoDocument } from 'react-addons-test-utils';

import App from './App';

describe('App Component', () => {

    it('should cleanly render', () => {

        const component = renderIntoDocument(<App />);

        expect(component).to.not.be.undefined;

    });
});


