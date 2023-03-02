/* 
A função abaixo recebe como parâmetro os tamanhos dos três lados de um triângulo: a, b, c. 
Com essa informação, a função retorna se o triângulo é equilátero, isósceles ou escaleno.
Refatore a função para o Typescript.
*/
// FUNÇÃO JS
// function checaTriangulo(a, b, c) {
//   if ((a !== b) && (b !== c)) {
//     return 'Escaleno'
//   } else if (a === b && b === c) {
//     return 'Equilátero'
//   } else {
//     return 'Isósceles'
//   }
// }

// FUNÇÃO TYPESCRIPT
// coloca em uma variavel quando pedir um objeto , nesse caso só pede variaveis normais
// a função recebe number e retorna string
function checaTriangulo(a:number, b:number, c:number) : string{
  if ((a !== b) && (b !== c)) {
    return 'Escaleno'
  } else if (a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

console.log(checaTriangulo(7, 7, 7))
console.log(checaTriangulo(7, 7, 9))
console.log(checaTriangulo(7, 8, 9))

