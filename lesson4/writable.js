const stream = require('stream');

const data = [];
const writable = new stream.Writable({
    write(chunk, encoding, callback) {
        data.push(chunk.toString());
        callback();
    }
})

writable.write('some data');
writable.end('done writing data');

writable.on('finish', () => {
    console.log('All writes are now complete.')
});

console.log(data);