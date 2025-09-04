"use strict";
async function asyncNumber(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 3);
        }, 1000);
    });
}
async function runNumber() {
    const result = await asyncNumber(10);
    console.log(result);
}
runNumber();
