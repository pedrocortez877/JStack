const user = {
  firstName: 'Pedro',
  lastName: 'Cortez',
  age: 23,
  instagram: 'pedrocortez877',
  skills: ['Back-end', 'Front-end', 'Mobile'],
  full_name: 'Nome completo',
}

// REST OPERATOR
// PRECISA SER O ULTIMO ELEMENTO
// ARRAYS FUNCIONAM DA MESMA FORMA
const { firstName, skills, ...rest } = user;

console.log(firstName, skills, rest);