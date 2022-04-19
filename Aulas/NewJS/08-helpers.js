const tech = 'Node.js';
const array = ['React', 'Node.js', 'Ruby'];

const includesString = tech.includes('ode.js'); //FAZ UM MATCH DE PARTE DA STRING
//CASE SENSITIVE
//BOOLEANO

const includesArray = array.includes('React'); //FAZ UM MATCH COM UMA POSIÇÃO DO ARRAY
//CASO HAJA UMA POSIÇÃO DO ARRAY COM UMA STRING === A QUE FOI PASSADA RETORN UM BOOLEANO
//CASE SENSITIVE

const startsWith = tech.startsWith('Node'); //FAZ UM MATCH COM A SEQUÊNCIA DE CARACTERES
//INICIAL DE UMA STRING, OU UM ÚNICO CARACTER
//CASE SENSITIVE
//BOOLEANO

const endsWith = tech.endsWith('Node'); //FAZ UM MATCH COM A SEQUÊNCIA DE CARACTERES
//FINAL DE UMA STRING, OU UM ÚNICO CARACTER
//CASE SENSITIVE
//BOOLEANO