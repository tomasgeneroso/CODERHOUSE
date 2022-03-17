export function* idGenerador(){
    let index = 0;
    while(true){
        yield index++
    }
 
}

let idGen=idGenerador();
let id=idGen.next().value
console.log(id)

export { idGen} 
