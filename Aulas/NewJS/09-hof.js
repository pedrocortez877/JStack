const array = [
  { product: 'Iphone', price: 5000, quantity: 2 },
  { product: 'Macbook Pro', price: 17000, quantity: 1 },
  { product: 'Magic Mouse', price: 600, quantity: 6 },
]

// .find
// CASO HAJA ALGUM ELEMENTO QUE SATISFAÇA A CONDICIONAL, ESTE ELEMENTO É RETORNADO
// CASO HAJA MAIS DE UM ELEMENTO QUE SATISFAÇA A CONDICIONAL, RETORNA O PRIMEIRO
const find = array.find((product) => product.name === 'Iphone');

// .findIndex
// CASO HAJA ALGUM ELEMENTO QUE SATISFAÇA A CONDICIONAL, É RETORNADO O INDEX DO ELEMENTO
// NESTE CASO A POSIÇÃO DO ARRAY
// CASO HAJA MAIS DE UM ELEMENTO QUE SATISFAÇA A CONDICIONAL, RETORNA O PRIMEIRO
const findIndex = array.findIndex((product) => product.name === 'Iphone');


// .some
// VERIFICA SE ALGUM ELEMENTO DO ARRAY CORRESPONDE A CONDICIONAL
// RETORNA UM BOOLEAN
const some = array.some((product) => product.name === 'Iphone');

// .every
// VERIFICA SE TODOS OS ELEMENTOS DO ARRAY CORRESPONDEM A CONDICIONAL
// RETORNA UM BOOLEAN
const every = array.every((product) => product.name === 'Iphone');


// .map
// SEMPRE RETORNA A MESMA QUANTIDADE DE ELEMENTOS DO ARRAY DE BASE
// PORÉM, SE HOUVER UMA ALTERAÇÃO DENTRO DA FUNÇÃO DO MAP, ESTE NOVO ARRAY
// IRÁ CONTER ESSAS INFORMAÇÕES
// SOMENTE IRÁ ARMAZENAR NESTE NOVO ARRAY SE HOUVER O RETORNO
const map = array.map((product) => {
  return{
    ...product,
    subtotal: product.quantity * product.price
  }
});


// .filer
// RETORNA UM NOVO ARRAY QUE ATENDA AS CONDIÇÕES PASSADAS NA FUNÇÃO
const filter = array.filter((product) => product.price > 999);


// .reduce
// REDUZ UM ARRAY A UM TIPO ESPECÍFICO DE DADOS
// SEGUNDO PARÂMETRO ESPECIFICA O TIPO DE DADOS NO QUAL O ARRAY SERÁ REDUZIDO
// TAMBÉM ALOCA UM VALOR INICIAL PARA O ACCUMULATOR
// FUNÇÃO QUE RECEBE 2 PARÂMETROS, accumulator e value
// ACUMULATOR É UMA VARIÁVEL PARA ARMAZENAR DADO FINAL A SER EXIBIDO
// OU SEJA, PODEMOS IR CONSTRUINDO O RESULTADO EM QUE O ARRAY SERA REDUZIDO
// A PARTIR DESSE accumulator
const accumulator = array.reduce((accumulator, product) => {
  return accumulator + (product.quantity * product.price);
}, 0);
