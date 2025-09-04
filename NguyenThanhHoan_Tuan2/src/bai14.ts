async function asyncNumber(n: number) : Promise<number> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(n*3)
        }, 1000)
    })
}

async function runNumber() {
    const result = await asyncNumber(10)
    console.log(result)
}

runNumber()