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
});

