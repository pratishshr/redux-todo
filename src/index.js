/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

require('../assets/css/font-awesome.min.css');
require('../assets/css/style.css');
require('../node_modules/toastr/build/toastr.css');

import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

ReactDOM.render(routes, document.querySelector('#app-container'));
