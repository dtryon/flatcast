import React from 'react';

import Header from './Header';
import FlatCast from './FlatCast';

export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <FlatCast />
        </div>;
    }
}

