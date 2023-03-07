import { frota } from "./frota"

export type Carro={
  marca: string,
  modelo: string,
  ano: number
}

function buscarCarrosPorMarca(frota:Carro[], marcaEscolhida?: string) {
  if (marcaEscolhida === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marcaEscolhida
    }
  )
}
// a função espera dois argumentos , mas se eu colocar a marca escolhida com "?" ela fica como opcional , e no console receber apenas o primeiro argumento "frota"
console.log(buscarCarrosPorMarca(frota, "Chevrolet"))