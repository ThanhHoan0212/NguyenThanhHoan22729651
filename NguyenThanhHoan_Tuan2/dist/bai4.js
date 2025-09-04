"use strict";
function randomNumber() {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 10);
        if (random == null) {
            reject("Error");
        }
        else {
            resolve(random);
        }
    });
}
randomNumber().then((data) => console.log(data)).catch((err) => console.log(err));
