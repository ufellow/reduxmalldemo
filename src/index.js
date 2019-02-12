import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
import './assets/css/phone_reset.css';
import './assets/js/flexible.debug.js'
import './assets/js/flexible_css.debug.js'
import * as serviceWorker from './serviceWorker';
import './assets/font/dongqingheitiW6.css'
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
