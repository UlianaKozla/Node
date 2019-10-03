let files = require('./files_creator');
let info = require('./info_adder');
let photo = require('./photo_adder');

//створюємо файл студента
files('js-18', 'Uliana')
files('js-20', 'Anton');

// створюємо документ студента із екстом що містить його ім'я
info('js-18', 'Uliana');
info('js-20', 'Anton');

// додаємо фото до папки студента
photo('js-18', 'Uliana', "1387026468_img0022.png");
