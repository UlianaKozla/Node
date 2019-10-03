let files = require('./files_creator');

files('js-18', 'Uliana');
files('js-20', 'Anton');

let info = require('./info_adder');

info('js-18', 'Uliana');
info('js-20', 'Anton');

let photo = require('./photo_adder');

photo('js-18', 'Uliana', "1387026468_img0022.png");
