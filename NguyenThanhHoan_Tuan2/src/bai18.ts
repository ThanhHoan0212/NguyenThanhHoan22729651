async function fetchUser(id: number) : Promise<{id: number, userName: string}> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                id,
                userName: `user${id}`})
        }, 1000)
    })
}

async function runTask18(){
    const user = await fetchUser(1);
    console.log(user);
}
runTask18();