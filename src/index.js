import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <p>hello</p>
            <i style={{fontSize:'4rem'}} className="wi wi-wind towards-23-deg"></i>
        </div>
    </Provider>,
    document.getElementById('app')
);
