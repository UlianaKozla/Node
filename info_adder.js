const fs = require('fs');

module.exports = (grupaName,studentName)=> {
    fs.writeFile(`./${grupaName}/${studentName}/${studentName}`, `My name is ${studentName}`, {}, err => {
        if (!err) {
            console.log(`${studentName} info file was created`);
        }
    })
}
