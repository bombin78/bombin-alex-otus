const EventEmitter = require('events');

class ColdEmitter extends EventEmitter{

    constructor(){
        super();
        this.list = [];
    }

    trigger(eventName) {
        if(this.listenerCount(eventName) === 0) {
            this.list.push(eventName);
        } else {
            this.listeners(eventName).forEach(handler => {
                if(typeof handler === 'function') {
                    handler();
                }
            });
        }
    }

    on(eventName, cb) {
        super.on(eventName, cb);
        this.list.forEach(item => {
            if(item === eventName) {
                this.emit(eventName);
            }
        });
    }
}

const a = new ColdEmitter();

a.on('wait3', () => {
    console.log('still executed 3');
});

a.on('wait5', () => {
    console.log('still executed 5');
});

a.trigger('wait5');
a.trigger('wait1');
a.trigger('wait3');
a.trigger('wait1');
a.trigger('wait2');
a.trigger('wait4');

a.on('wait1', () => {
    console.log('still executed 1');
});

a.on('wait2', () => {
    console.log('still executed 2');
});

a.trigger('wait2');