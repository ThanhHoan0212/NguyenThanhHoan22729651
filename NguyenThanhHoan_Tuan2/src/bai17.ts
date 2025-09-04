async function asyncNumber17(n: number) : Promise<number> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(n*3)
        }, 1000)
    })
}

async function runNumber17(){
    const result = await Promise.all([
        asyncNumber17(3),
        asyncNumber17(7),
        asyncNumber17(23)
    ])

    for await (const num of result){
        console.log(num)
    }
}

runNumber17()