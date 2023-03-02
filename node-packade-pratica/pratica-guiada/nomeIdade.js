const name=  process.argv[2]
const age= Number(process.argv[3])

const soma= Number(process.argv[3]) +7

if(!name || !age){
    console.log("informe seu nome/idade")
}else{
console.log(`Ola ${name}, voce tem ${age}. \n Em sete anos voce tera ${soma}.`)
}