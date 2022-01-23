const iterable = {
    [Symbol.iterator]() {
        let step = 0
        const iterator = {
            next() {
                if (step <= 2) {
                    step++
                }
                switch (step) {
                    case 1:
                        return { value: 'hello', done: false }
                    case 2:
                        return { value: 'world', done: false }
                    default:
                        return { value: undefined, done: true }
                }
            }
        }
        return iterator
    }
}

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for(const item of iterable) {
    console.log(item);
}
