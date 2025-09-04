function simulateTask2(time: number) : Promise<String>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`Task done in ${time}ms`)
        }, time)
    })
}

const task1 = simulateTask2(2000);
const task2 = simulateTask2(1000);
const task3 = simulateTask2(500);

Promise.race([task1, task2, task3]).then((data) => console.log(data))