import { User , Product, Purchase ,  CATEGORIAS} from "./types"


 const baseUser: User[]=[
    {
      id : "1",
      email: "joana@email.com",
      password: "123456"
    },
    {
      id : "2",
      email: "joanaa@email.com",
      password: "123457"
    },
    {
        id : "3",
        email: "jjoana@email.com",
        password: "123458"
      },         
]
// função que cria usuario
export function createUser(id:string , email:string, password: string) : void {
    const newUser : User={
        id,
        email,
        password,
    }
    baseUser.push(newUser)
    console.log("Cadastro realizado com sucesso")


}

// função que pega todos os usuarios

export function getAllUser():User[]{
    return baseUser
}

// -----------------------------------------

 const baseProduct: Product[]=[
    {
        id : "1",
        name: "bolsa",
        price: 6,
        category: CATEGORIAS.ACCESSORIES
    },
    {
        id : "2",
        name: "blusa",
        price: 10,
        category: CATEGORIAS.CLOTHES_AND_SHOES
    },
    {
        id : "3",
        name: "celular",
        price: 50,
        category: CATEGORIAS.ELECTRONICS
    },        
]

// função que cria produto
export function createProduct(id:string , name: string, price: number, category: CATEGORIAS) : void {
    const newProduct : Product={
        id,
        name,
        price,
        category
    }
    baseProduct.push(newProduct)
    console.log("Produto cadastrado com sucesso")


}
// função que pega todos os produtos

export function getAllProduct():Product[]{
    return baseProduct
}

// função que busca por id do produto
export function buscarPorId(id:string):Product[]{
  return  baseProduct.filter((item)=>{return item.id === id})
}
// função que busca por nome do produto
export function buscarPorNome(name:string):Product[]{
    return  baseProduct.filter((item)=>{return item.name.toLowerCase().includes(name.toLowerCase())})
  }

// --------------------------------------------------

const basePurchase: Purchase[]=[
    {
        userId : "1",
    productId: "1",
    quantity: 2,
    totalPrice: "12"
    },
    {
        userId : "2",
    productId: "2",
    quantity: 2,
    totalPrice: "20"
    },  
    {
        userId : "3",
    productId: "3",
    quantity: 2,
    totalPrice: "100"
    },        
]

// função que cria uma compra
export function createPurchase(userId : string,
productId: string,
quantity: number,
totalPrice: string) : void {
    const newPurchase : Purchase={
        userId ,
        productId,
        quantity,
        totalPrice,
    }
    basePurchase.push(newPurchase)
    console.log("Compra realizada com sucesso")


}

// função que buscar por id do comprador

export function buscarPorIdComprador(id:string):Purchase[]{
    return  basePurchase.filter((item)=>{return item.userId === id})
  }


