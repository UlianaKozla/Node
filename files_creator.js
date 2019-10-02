const fs = require('fs');
module.exports = (grupaName, studentName) => {
        fs.mkdir(`./${grupaName}`, err => {
            if (!err) {
                console.log(`${grupaName} was created`)
            }
        }),
        fs.mkdir(`./${grupaName}/${studentName}`, err => {
            if (!err) {
                console.log(`${studentName} was created`);
            }
        })
};