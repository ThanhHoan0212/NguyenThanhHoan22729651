function promiseChain(num : number) : Promise<number> {
    return Promise.resolve(num)
        .then(n => n*n)
        .then(n => n*2)
        .then(n => n+5)
        .then(data =>{
            return data;
        })
}

promiseChain(5).then(data => console.log(data));