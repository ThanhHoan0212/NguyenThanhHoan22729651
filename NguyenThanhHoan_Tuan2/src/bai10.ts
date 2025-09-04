function finallyPromise(success: boolean) : Promise<String>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(success){
                resolve("Thành công")
            }else{
                reject("Thất bại")
            }
        }, 1000)
    })
}

finallyPromise(true)
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))
    .finally(() =>console.log("Done"));