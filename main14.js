addEventListener("DOMContentLoaded",()=>{
    let p=Number(prompt(`coloque aqui el valor del producto `))
    let d=Number (0.05)
    let res=Number(p*d)
    let des=Number(p-res)
    console.log(`el precio final mas el descuent es:${des}`);
})