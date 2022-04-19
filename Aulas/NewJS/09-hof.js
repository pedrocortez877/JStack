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