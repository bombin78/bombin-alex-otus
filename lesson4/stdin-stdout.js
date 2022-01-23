process.stdin.setEncoding('utf8');

process.stdout.write('enter your name: ');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        process.stdout.write(`your name is ${chunk}`);
        if(chunk.toString().includes('done')){
            process.exit(0);
        }
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end\n');
});

