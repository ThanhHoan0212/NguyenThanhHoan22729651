function simulateTask13(time: number, test = true) : Promise<String> {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(test){
                resolve(`Task done in ${time}ms`);
            }else{
                reject(`Task failed in ${time}ms`);
            }
            
        }, time)
    })
}

async function runTask13(){
    try{
        const result = await simulateTask13(2000, false)
        console.log(result)
    }catch(err){
        console.error("Error",err)
    }
}
runTask13()