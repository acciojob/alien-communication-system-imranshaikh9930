//your JS code here. If required.
console.log('Script start');

// Macrotask using setTimeout
setTimeout(() => {
    console.log('Macrotask 1');
}, 0);

// Microtask using Promise
Promise.resolve().then(() => {
    console.log('Microtask 1');
}).then(() => {
    console.log('Microtask 2');
});

// Macrotask using setTimeout
setTimeout(() => {
    console.log('Macrotask 2');
}, 0);

// Microtask using Promise
Promise.resolve().then(() => {
    console.log('Microtask 3');
});

console.log('Script end');