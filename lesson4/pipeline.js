const fs = require('fs');
const {promisify} = require('util');
const pipeline = promisify(require('stream').pipeline);

async function run() {
    await pipeline(
        fs.createReadStream('lowercase.txt'),
        async function* (source) {
            for await (const chunk of source) {
                yield String(chunk).toUpperCase()
            }
        },
        fs.createWriteStream('uppercase.txt')
    )
    console.log('Pipeline succeeded.')
}

run().catch(console.error);