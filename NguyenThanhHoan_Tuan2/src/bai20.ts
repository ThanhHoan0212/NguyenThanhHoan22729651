async function fetchUser20(id: number) : Promise<{id: number, userName: string}> {
    const apiCall = new Promise<{id: number, userName: string}>((resolve) => {
        setTimeout(()=>{
            resolve({
                id,
                userName: `user${id}`})
        }, 3000)

        })
        const timeout = new Promise<never>((_,reject)=>{
            setTimeout(()=> reject(new Error("Quá thời gian chờ!")),2000)
    })
    return Promise.race([apiCall, timeout])
}


async function fetchUsers20(ids: number[]) : Promise<{id: number, userName: string}[]> {
    const promises = ids.map((id) => fetchUser20(id));
    return Promise.all(promises);
}

async function runTask20(){
    try{
        const users = await fetchUsers20([1, 2, 3, 4, 5]);
    console.log(users);
    }catch(err){
        console.error("Error",err)
    }
    
}
runTask20()