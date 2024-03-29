// JS is Single Threaded language
// one line at a time

// synchronous nature: one by one
let a = 24;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

// asynchronous nature: random, not one by one
// solutions: callbacks, setTimeout,
// browser sets setTimeout function inside callstack of JS
setTimeout( () => {
    console.log("apna college"); //2. apna college
}, 2000);

setTimeout( () => {
    console.log("hello world"); //3. hello world
}, 2000);

console.log("hello..."); //1. hello...


// asynchronous causes problem: callback hell
let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "blue";
// }, 3000);


// function changeColor(color, delay) {
//     setTimeout( () => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);


// callback hell
function changeColor(color, delay, nextColorChange) {
    setTimeout( () => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
// callbacks nesting -> callback hell
changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("brown", 1000)
        });
    });
});

