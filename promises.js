// callbacks

// function savetoDB(data, success, failure) {
//     let internetSpeep = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeep > 4) {
//         success();
//     } else {
//         failure();
//     }
//     console.log(internetSpeep);
// }

// savetoDB(
//     "asmita", 
//     () => {
//         console.log("success: your data was saved");
//         savetoDB("hello world", () => {
//             console.log("success2: data2 saved");
//         }, () => {
//             console.log("failure2: weak connection");
//         })
//     },
//     () => {
//         console.log("failure: weak connection, data not saved");
//     }
// );

// callback hell: 
// success: your data was saved     promises.js:16
// failure2: weak connection        promises.js:20
// 1                                promises.js:10 
// 7                                promises.js:10 


// Promises 
// promise object reoresents the eventual completion(or failure) of 
// an synchronous operation & its rerulting value
// it has resolve & reject

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeep = Math.floor(Math.random() * 10) + 1;
        if(internetSpeep > 4){
            resolve("success: data saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

// console.log(savetoDB("apna college"));

// PromiseState: fulfilled/pending/rejected
// PromiseSrate: success: msg/ failure: msg


// Promise fulfilled -> then() / reject -> catch()
// printing msg instead of error message
// let request = savetoDB("abcd"); //req = promise object
// // console.log(request);
// request.then( () => {
//     console.log("promise was resolved");
// })
// .catch( () => {
//     console.log("promise was rejected");
// })

// alternate
// savetoDB("abcd")
//     .then( () => {
//         console.log("promise was resolved");
//     })
//     .catch( () => {
//         console.log("promise was rejected");
//     });


// Promise chaining
// savetoDB("abcd")
//     .then( () => {
//         console.log("data1 saved");
//         return savetoDB("hello");
//     })
//     .then( () => {
//         console.log("data2 saved");
//         return savetoDB("asmita");
//     })
//     .then( () => {
//         console.log("data3 saved");
//     })
//     .catch( () => {
//         console.log("promise was rejected");
//     });


// Promises are rejected and resolved with some data(valid results or errors)
savetoDB("abcd")
    .then( (result) => {
        console.log("data1 saved");
        console.log("result of promise:", result);
        return savetoDB("hello");
    })
    .then( (result) => {
        console.log("data2 saved");
        console.log("result of promise:", result);
        return savetoDB("asmita");
    })
    .then( (result) => {
        console.log("data3 saved");
        console.log("result of promise:", result);
    })
    .catch( (error) => {
        console.log("promise was rejected");
        console.log("error:", error);
    });

