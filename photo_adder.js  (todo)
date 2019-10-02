const fs = require('fs');
module.exports = (grupaName,studentName, photo)=> {
    let write = fs.createWriteStream(`./photos/${photo}`);
    let read = fs.createReadStream(`./${grupaName}/${studentName}/`);
    read.on('photo', chunk => {
        write.write(chunk)
    })
    // fs.createReadStream(`./photo/${photoы}`).pipe(fs.createWriteStream(`./${grupaName}/${studentName}/`))
}
