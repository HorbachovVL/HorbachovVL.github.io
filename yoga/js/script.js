require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', function(){

'use strict';
let calc = require('./parts/calc.js'),
    form = require('./parts/form.js'),
    slide = require('./parts/slide.js'),
    tabs = require('./parts/tabs.js'),
    time = require('./parts/time.js'),
    modal = require('./parts/modal.js');

    calc();
    form();
    slide();
    tabs();
    time();
    modal();
    
});