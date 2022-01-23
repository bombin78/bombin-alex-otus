const {Readable} = require('stream');

const readable = new Readable({
    objectMode: true,
    read() { }
});

readable.push({ a: 1 });
readable.unshift({ b: 1 });

readable.on('data', (data) => {
    console.log(data);
})