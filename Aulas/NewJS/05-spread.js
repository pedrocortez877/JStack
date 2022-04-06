const user = {
  firstName: 'Pedro',
  lastName: 'Cortez',
  age: 23,
  instagram: 'pedrocortez877',
  skills: ['Back-end', 'Front-end', 'Mobile'],
  full_name: 'Nome completo',
}

//SPREAD OPERATOR
//PRINCÍPIO DA IMUTABILIDADE, NUNCA ALTERAR AS PROPRIEDADES DE UM OBJETO DIRETAMENTE

const updatedUser = {
  //ALTERAÇÕES AQUI DENTRO, DEPOIS DE ...USER, POIS IRÁ SOBRESCREVER AS PROPRIEDADES
  //ARRAYS FUNCIONAM DA MESMA FORMA
   ...user
}

