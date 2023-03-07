import { User , Product, Purchase} from "./types"


export const baseUser: User[]=[
    {
      id : "um",
      email: "joana@email.com",
      password: "labenu"
    },
    {
      id : "dois",
      email: "joana@email.com",
      password: "labenu"
    },       
]

export const baseProduct: Product[]=[
    {
        id : "um",
        name: "Uva",
        price: 6,
        category: "frutas"
    },
    {
        id : "dois",
        name: "morango",
        price: 10,
        category: "fruta"
    },       
]

export const basePurchase: Purchase[]=[
    {
        userId : "um",
    productId: "um",
    quantity: 2,
    totalPrice: "doze"
    },
    {
        userId : "dois",
    productId: "dois",
    quantity: 2,
    totalPrice: "vinte"
    },       
]