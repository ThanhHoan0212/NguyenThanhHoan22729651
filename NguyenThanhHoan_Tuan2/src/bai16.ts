async function asyncNumber16(n: number) : Promise<number> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(n*3)
        }, 1000)
    })
}

async function runNumber16(){
    const result = await Promise.all([
        asyncNumber16(3),
        asyncNumber16(7),
        asyncNumber16(23)
    ])
    console.log(result)
}

runNumber16()