const { printText } = require('./printText');
const os = require('os');

printText('Olá, seu sistema operacional é: ' + os.platform());