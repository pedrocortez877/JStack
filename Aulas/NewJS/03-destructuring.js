const user = {
  firstName: 'Pedro',
  lastName: 'Cortez',
  age: 23,
  instagram: 'pedrocortez877',
  skills: ['Back-end', 'Front-end', 'Mobile'],
  full_name: 'Nome completo',
}

// Destructuring 
const { firstName, lastName, skills } = user;

// RENAME ATTRIBUTE
const { full_name: fullName } = user;

// PEGA POR POSIÇÃO
const [ primary, secondary, tertiary, quaternary ] = skills;

console.log(firstName + ' ' + lastName);