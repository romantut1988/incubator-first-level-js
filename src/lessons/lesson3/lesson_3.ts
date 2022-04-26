console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//console.dir (
//  XMLHttpRequest
// )

// let prom = new Promise( (resolve, reject) => {
//     setTimeout( (response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//             console.log("2", prom);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: { userName: "Yo", id: "s2bty2tyu", status: "active"}, error: {}});
// });
//
// prom
//     .then(
//         res => {
//             console.log("res", res);
//             return 10;
//         },
//         () => {}
//     )
//     .then(res2 => {
//         console.log("res2", res2);
//     })
//
// console.log("1", prom);


// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {userName: "Yo", id: "s2bty2tyu", status: "active"}, error: {}});
// });
//
// prom
//     .then(
//         res => {
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: { id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         },
//     )
//     .then(res2 => {
//         console.log("res2", res2);
//     })


// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 404, data: {}, error: "Not found"});
// });
//
// prom
//     .then(
//         res => {
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: { id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         },
//         err => {
//             console.log("err", err);
//             throw new Error ("dfjfjdskfjdkgjjdk");
//         }
//     )
//     .then(res2 => {
//         console.log("res2", res2);
//     },
//         err2 => {
//             console.log("err2", err2)
//         }
//     )


// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {id: "12313fsfs414"}, error: {}});
// });
//
// prom
//     .then(
//         res => {
//             console.log("res", res);
//             throw new Error("1111");
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: {id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         },
//         err => {
//             console.log("err", err);
//             throw new Error("dfjfjdskfjdkgjjdk");
//         }
//     )
//     .then(res2 => {
//             console.log("res2", res2);
//         },
//         err2 => {
//             console.log("err2", err2)
//         }
//     )
//     .then(null, err3 => {
//         console.log("err3", err3)
//     })



// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {id: "12313fsfs414"}, error: {}});
// });
//
// prom
//     .then(
//         res => {
//             console.log("res", res);
//             throw new Error("1111");
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: {id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         }
//     )
//     .then(
//         res2 => {
//             console.log("res2", res2);
//         }
//     )
//     .then(
//         null,
//         err3 => {
//         console.log("err3", err3)
//     }
//  )


// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {id: "12313fsfs414"}, error: {}});
// });
//
// prom
//     .then(
//         res => {
//             console.log("res", res);
//             throw new Error("1111");
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: {id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         }
//     )
//     .then(
//         res2 => {
//             console.log("res2", res2);
//         }
//     )
//                     // .then(
//                     //     null,
//                     //     err3 => {
//                     //         console.log("err3", err3)
//                     //     }
//                     // )
//     .catch(err => {
//         console.log("err", err)
//     })




// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data);
//         } else {
//             reject(response.error);
//         }
//     }, 2000, {httpStatus: 200, data: {id: "12313fsfs414"}, error: {}});
// });

// prom
//     .catch(err => {
//         console.log("err", err)
//     })
//     .then(
//         res => {
//             console.log("res", res);
//             throw new Error("1111");
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: {id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         }
//     )
//     .catch(err => {
//         console.log("err", err)
//     })
//     .then(
//         res2 => {
//             console.log("res2", res2);
//         }
//     )
//     .catch(err => {
//         console.log("err", err)
//     })


// prom
//     .catch(err => {
//         console.log("err", err)
//     })
//     .then(
//         res => {
//             console.log("res", res);
//             throw new Error("1111");
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data);
//                     } else {
//                         reject(response.error);
//                     }
//                 }, 1200, {httpStatus: 200, data: {id: "s2bty2tyu", count: 'BY2000000021324435'}, error: {}});
//             });
//         }
//     )
//     .catch(err => {
//         console.log("err", err)
//     })
//     .then(
//         res2 => {
//             console.log("res2", res2);
//         }
//     )
//     .catch(err => {
//         console.log("err", err)
//     })

console.log("Start")


let prom = new Promise((resolve, reject) => {
    console.log("START PROMISE")
    setTimeout((response) => {
        console.log("START SETTIMEOUT")
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data);
        } else {
            reject(response.error);
        }
    }, 2000, {httpStatus: 200, data: {id: "12313fsfs414"}, error: {}});
    console.log("END PROMISE")
});

console.log("MIDDLE")

prom
    .then(console.log)

console.log("END")

// just a plug
export default () => {};