
// crie um type para representar um post
type TPosts={
    autor: string,
    texto: string
}
// utilize o tipo criado a cima para fazer a tipagem do array posts
const posts : TPosts[]= [
    {
      autor: 'Alvo Dumbledore',
      texto: 'Não vale a pena viver sonhando e se esquecer de viver'
    },
    {
      autor: 'Severo Snape',
      texto: 'Menos 10 pontos para Grifinória'
    },
    {
      autor: 'Hermione Granger',
      texto: 'É levi-ô-sa, não levio-sá!'
    },
    {
      autor: 'Dobby',
      texto: 'Dobby é um elfo livre!'
    },
    {
      autor: 'Lord Voldemort',
      texto: 'Avada Kedavra!'
    }
  ]

// analize a função buscarPostPorAutor , quais sao as entradas e saidas ? faça a tipagem da função
// "posts" é um array pois estou usando filter                       depois do parenteses é a saida da função que no caso é um array filtrado
function buscarPostsPorAutor(posts:TPosts[], autorInformado:string) :TPosts[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(buscarPostsPorAutor (posts , 'Hermione Granger'))