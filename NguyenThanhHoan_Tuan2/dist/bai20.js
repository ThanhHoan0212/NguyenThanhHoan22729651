"use strict";
async function fetchUser20(id) {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                userName: `user${id}`
            });
        }, 3000);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Quá thời gian chờ!")), 2000);
    });
    return Promise.race([apiCall, timeout]);
}
async function fetchUsers20(ids) {
    const promises = ids.map((id) => fetchUser20(id));
    return Promise.all(promises);
}
async function runTask20() {
    try {
        const users = await fetchUsers20([1, 2, 3, 4, 5]);
        console.log(users);
    }
    catch (err) {
        console.error("Error", err);
    }
}
runTask20();
