addEventListener("DOMContentLoaded",()=>{
    let div=Number(prompt(`ingrese en numero`,4/3))
    let pi=Number(prompt(`ingrese el numero`,3.14))
    let A=Number(prompt(`dijite el valor de A:`))
    let B=Number(prompt(`dijite el valor de B:`))
    let C=Number(prompt(`dijite el valor de C:`))
    let v=(div)*pi+A*B*C
    console.log(`algoritmo para obtener una elipsoide:${v}`);
})