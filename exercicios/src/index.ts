import {  createUser, createProduct, getAllProduct, buscarPorId, buscarPorNome, createPurchase, buscarPorIdComprador} from "./database"
import { CATEGORIAS } from "./types"

// consoles para o exercicio um com as devidas importações
// console.log(baseProduct)
// console.log(baseUser)
// console.log(basePurchase)

// função para separar 
function Sepador():void{
    console.log("=".repeat(70))
}

// chamar funções com suas devidas importações
createUser("u003", "beltrano@email.com", "beltrano99")
Sepador()
createProduct("u004", "camisa" , 40, CATEGORIAS.CLOTHES_AND_SHOES)
Sepador()

console.log(getAllProduct())

console.log(buscarPorId("3"))

console.log(buscarPorNome("bolsa"))

createPurchase("4" , "20", 4, "100")

console.log( buscarPorIdComprador("1"))


