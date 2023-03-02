import { countries } from "./countries.js";

// RECEBENDO DOIS ARGUMENTOS 
const name = process.argv[2]
const code=process.argv[3]

// SE NAO PASSAR AS INFORMAÇOES 
if(!name || !code){

    console.log("digite o nome do pais e/ou codigo do pais")

}else{
// PASSEI TODAS AS INFORMAÇÕES EU CRIO UM OBJETO NOVO 
    const newCountry={
        name,
        code,
    }
    // E ADICIONA NO ARRAY 
    countries.push(newCountry)
    console.table(countries)

}