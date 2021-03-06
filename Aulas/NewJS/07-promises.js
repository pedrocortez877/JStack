const apiCall = new Promise((resolve, reject) => { //SÓ HAVERÁ UM RETORNO DA PROMISE QUANDO UM DESTES 2 ARGUMENTOS FORÉM CHAMADOS
  setTimeout(() => {
    resolve('Sucesso!');
  }, 2000); //SIMULA UMA CHAMADA A UMA API POR EXEMPLO, OPERAÇÕES DEMORADAS
});

apiCall.then((value) => { 
  //.THEN É CHAMADO QUANDO O ARGUMENTO RESOLVE DA PROMISE FOI ACIONADO, OU SEJA, SUCESSO NA EXECUÇÃO
  //É POSSÍVEL PEGAR O VALOR RETORNADO NA PROMISE ATRAVÉS DO PARÂMETRO RECEBIDO NA FUNÇÃO, VALUE NESTE CASO
  //CASO EU TENHA ALGUM CÓDIGO DEPOIS DESTE, ELE SERÁ EXECUTADO MESMO E A PROMISE AINDA FOR PENDING
}).catch(() => { 
  // .CATCH É CHAMADO QUANDO O REJECT É ACIONADO, OU SEJA, ERRO NA EXECUÇÃO
});

async function run(){
  try{
    const resposta = await apiCall();
    //TRAVA A EXECUÇÃO DA CALL STACK, QUALQUER CÓDIGO ABAIXO DESTE SÓ OCORRERÁ QUANDO ESTA PROMISE FOR CONCLUIDA
  }catch(error){
    //PARA PEGAR ERROS NESTE FORMATO, BLOCO TRY CATCH
  }
}