const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('error1', () => {
    console.log('Error1');
    
});

myEmitter.on('error2', () => {
    console.log('Error2');
    
});

myEmitter.on('removeListener', (x) => {
    console.log('Кто-то удалился из ', x);
    
});

// hr.js
myEmitter.on('new-employee', (x) => {
    console.log('hr.js со значением параметра x = ', x);
})

// security.js
myEmitter.once('new-employee', () => {
    // throw new Error('Security error!')
    console.log('security.js');
})

// something.js
myEmitter.prependListener('new-employee', () => {
    console.log('something.js');
    return 'я something.js'
})

myEmitter.emit('error1');
myEmitter.emit('new-employee', 'какое-то значение');
myEmitter.emit('error2');

console.log('List for "new-employee": ', myEmitter.listeners('new-employee'));
console.log('Вызов первого слушателя для "new-employee": ', myEmitter.listeners('new-employee')[0]());
console.log('End of script');
