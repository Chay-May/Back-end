

// pessoa cliente cadastrada

export type User ={
  id : string,
  email: string,
  password: string
}

// produto cadastrado
export type Product ={
    id : string,
    name: string,
    price: number,
    category: string
  }

//   compra realizada por cliente
  export type Purchase ={
    userId : string,
    productId: string,
    quantity: number,
    totalPrice: string
  }