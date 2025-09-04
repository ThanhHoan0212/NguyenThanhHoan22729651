async function promise11(){
    const data = await new Promise<String>((resolve)=>{
        setTimeout(()=> resolve("Hello async"),2000)
    })
    console.log(data)
}
promise11()
