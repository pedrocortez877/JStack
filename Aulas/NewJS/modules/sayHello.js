import sayHello from "./index";
//import { sayHello } from './index'; ESTE FORMATO CASO EXPORTE O OBJETO SEPARADAMENTE

//NODE NATIVAMENTE NÃO COMPREENDE ESTA SINTAXE DE ESMODULES
//PARA QUE ISSO FUNCIONE SEM UM TRANSPILADOR, COMO O BABEL, 
//DEVE-SE TROCAR AS EXTENSÕES PARA .mjs E AO IMPORTAR, 
//COLOCAR A EXTENSÃO NO ARQUIVO

sayHello('Pedro');