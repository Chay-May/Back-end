
// dois tipos adm e normal

type AdmimAccount={
    account: string,
    permissin: boolean
}

type NormalAccount={
    account: string,
    permissin: boolean
}



// ENUM com valores de Admin e Normal 
enum Role{
    ADMIN= "Admin",
    NORMAL= "Normal"
}


// criou um tipo
type Person ={
    id: string,
    name: string,
    email:string,
    senha: string,
    // role: string
    role: Role

}
// unindo dos tipos = intersection
type AdminUser = Person & AdmimAccount
type NormalUser = Person & NormalAccount

// array de usuario que permite guardar APENAS UM tipo de usuario
const admins: Array <AdminUser>=[]
const normals: NormalAccount[]=[]


                //  fazendo a intersection na propria função
const user2: Person & NormalUser={
    id: "2",
    name: "Matheus",
    email:"Matheus@email.com",
    senha: "123457",
    role: Role.NORMAL,
    // depois que colocar o type adminUser
    account:"0o1",
    permissin: false
}



// atribuimos a variavel "user1"
const user1: Person & AdminUser={
    id: "1",
    name: "joana",
    email:"joana@email.com",
    senha: "123456",
    // role: "Admin"
    role: Role.ADMIN,
    // depois que colocar o type adminUser
    account:"001",
    permissin: true
}
// normals.push(user1)
// função para validar usuario e guardar os usuarios em um array
const validarUsuario=(usuario:any)=>{
    if(usuario.role !== Role.ADMIN){
        normals.push(usuario)
    }else{
        admins.push(usuario)
    }

}

// chamar a função duas vezes uma para cada usuario
validarUsuario(user1)
validarUsuario(user2)

// console em tabela para cada role
console.table(normals)
console.table(admins)



