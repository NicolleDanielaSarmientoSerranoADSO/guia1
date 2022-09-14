addEventListener("DOMContentLoaded",()=>{
    let b=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let a=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let c=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let d=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let res=(a+b+c+d)/5
    console.log(`su promedio es :${res}`);
})