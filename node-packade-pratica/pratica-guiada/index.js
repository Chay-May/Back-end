import { countries } from "./countries.js";
// console.log(countries)
// console.table(countries)

// const value= process.argv[2]

if(!value){
    console.log("informe um pais")
}else{
    const result = countries.filter((country)=>{
        return country.name.toLowerCase().includes(value.toLowerCase())
    })
    // console.table(result)

}




