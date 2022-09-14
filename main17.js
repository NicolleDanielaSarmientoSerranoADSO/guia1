addEventListener("DOMContentLoaded",()=>{
    let prod=Number(prompt(`coloque el valor del producto:`))
    let iva=Number(prompt(`coloque el valor del iva:`))
    let vaiva=prod*iva
    let res=prod+vaiva
    console.log(`valor del producto con el iva:${res}`);("", res)
    console.log(`valor del iva:${vaiva}`);
})