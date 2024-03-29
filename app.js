// Call Stack
// stack of function calls

function hello() {
    console.log("inside hello function");
    console.log("hello");
}
// hello();

function demo() {
    console.log("calling hello func");
    hello();
}

console.log("calling demo function");
demo();
console.log("done!");

// call stack for above function calls [1.demo(), 2.hello()]

// visualizing call stack
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans= two() + one();
    console.log(ans);
}

three();

// stackframe: [1.three, 2.two, 3.one]
// stackframe: [1.three, 2.two] -> 1returned
// stackframe: [1.three, 2.two, 3.one]
// stackframe: [1.three, 2.two] -> 1returned
// stackframe: [1.three] -> 2returned
// stackframe: [1.three, 2.one]
// stackframe: [1.three] -> 1returned
// stackframe: [ ] -> 3 returned

// Breakpoints: track callstack through browser
// Source->Page->top->app.js, breakpoints add simply clicking leftside numbers
// breakpoints and call stack are at bottom left & result at right side