const fs = require('fs');
module.exports = (grupaName,studentName, photo)=> {
    let write = fs.createWriteStream(`./photos/${photo}`);
    let read = fs.createReadStream(`./${grupaName}/${studentName}/${photo}`);
    read.on('data', chunk => {
        write.write(chunk)
    })
    // fs.createReadStream(`./photo/${photo}`).pipe(fs.createWriteStream(`./${grupaName}/${studentName}/${photo}`))
}