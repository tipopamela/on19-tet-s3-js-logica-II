/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

estudo = 1;
// estudo reatribuído com valor 1
estudo = multiplicador * estudo;
// estudo atribuído com multiplicador 2 * 1 (estudo vale 2)
estudo = estudo * estudo / estudo;
// estudo reatribuído com 2 * 2 / 2 (estudo vale 2)
estudo = estudo - multiplicador;
// estudo 2 - 2 = (estudo vale 0)
estudo += 2;
// estudo recebe ele mesmo + 2 = (estudo vale 2)
estudo /= 2;
// estudo recebe ele mesmo divido por 2 = (estudo vale 1)
{
  let estudo = 6; // escopo de bloco, dentro dele estudo vale 6. 
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
