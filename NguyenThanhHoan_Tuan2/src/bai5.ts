function simulateTask(time: number) : Promise<String> {
    return new Promise((resolve =>{
        setTimeout(()=>{
            resolve("Task done")
        }, time)
    }))
}
simulateTask(1000).then((data)=> console.log(data))
