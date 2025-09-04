"use strict";
async function asyncNumber15(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 3);
        }, 1000);
    });
}
async function runNumber15() {
    const result = await asyncNumber15(10);
    console.log("result 1:", result);
    const result2 = await asyncNumber15(20);
    console.log("result 2:", result2);
    const result3 = await asyncNumber15(30);
    console.log("result 3:", result3);
}
runNumber15();
