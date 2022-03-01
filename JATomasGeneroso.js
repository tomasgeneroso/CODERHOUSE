const cb=()=>console.log("FINALIZADO!!!")

const mostrarPal=(palabra,int=1000,cb)=>{
    let paldiv=palabra.split(' ');let i=0
    return new Promise((resolve)=>{
        
        const control=setInterval(()=>{
            if (i<paldiv.length){
                console.log(paldiv[i])
                i++
            }else{
                console.log("Cantidad de palabras ",i)
                clearInterval(control)
                resolve(cb)
            }
        },int)
    })
}

const play=async ()=>{
    let a = await mostrarPal("Arroz con leche",cb)
    let b = await mostrarPal("Me quiero casar",2000,cb)
    let c = await mostrarPal("Con una ballena blanca",2500,cb)
    cb();
}

play()