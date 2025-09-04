"use strict";
async function fetchUser19(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                userName: `user${id}`
            });
        }, 1000);
    });
}
async function fetchUsers(ids) {
    const promises = ids.map((id) => fetchUser19(id));
    return Promise.all(promises);
}
async function runTask19() {
    const users = await fetchUsers([1, 2, 3, 4, 5]);
    console.log(users);
}
runTask19();
