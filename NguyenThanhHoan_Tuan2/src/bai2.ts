var promise2 : Promise<number> = new Promise(resolve => {
    setTimeout(() =>{
        resolve(10);
    },1000)
})

promise2.then((number) => console.log(number))