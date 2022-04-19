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