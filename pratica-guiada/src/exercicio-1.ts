enum Cores{
VERMEHO="Vermelho",
LARANJA= "laranja",
AMARELO= "amarelo",
VERDE="verde",
AZUL="azul",
ANIL = "anil",
VIOLETA= "violeta"
}



type Pessoa={
    nome:string,
    idade:number,
    corFavorita: string
}


const pessoa1: Pessoa={
    nome:"Maria",
    idade:20,
    corFavorita: Cores.AMARELO
}

const pessoa2:Pessoa={
    nome:"Joao",
    idade:21,
    corFavorita: Cores.AZUL
}

const pessoa3:Pessoa={
    nome:"Rodrigo",
    idade:22,
    corFavorita: Cores.LARANJA
}

const pessoa4:Pessoa={
    nome:"Fernanda",
    idade:23,
    corFavorita: Cores.ANIL
}

console.table([pessoa1 , pessoa2, pessoa3, pessoa4])
