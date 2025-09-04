"use strict";
function simulateTask1(time) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    }));
}
const promise1 = simulateTask1(2000);
const promise4 = simulateTask1(500);
const promise3 = simulateTask1(1000);
Promise.all([promise1, promise3, promise4]).then((data) => console.log(data));
