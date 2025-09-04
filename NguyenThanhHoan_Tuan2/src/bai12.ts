function simulateTask12(time: number) : Promise<String> {
    return new Promise((resolve =>{
        setTimeout(() =>{
            resolve(`Task done in ${time}ms`);
        }, time)
    }))
}

async function runTask12(){
    const task = await simulateTask12(2000);
    console.log(task);
}

runTask12()