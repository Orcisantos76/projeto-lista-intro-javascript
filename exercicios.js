// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const somar = num1+num2
  return somar
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const altura = prompt('Insira a altura: ')
  const largura = prompt('Insira a largura: ')
  const calculo = altura*largura  
  return console.log(calculo);
}




// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Insira o ano atual:")
  const anonasc = prompt("Insira o ano de nascimento")
  const idade = anoAtual- anonasc
  return console.log(idade)

}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // const peso = peso
  // const altura = altura
  const imc = peso/(altura*altura)
  return imc

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome: ')
  const idade = prompt('Digite sua idade: ')
  const email = prompt('Digite seu email: ')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario("Ori",45,"orcisantos76@gmail.com")

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const cor1= prompt("Digite sua cor preferida: ")
  const cor2= prompt("Digite sua cor preferida: ")
  const cor3= prompt("Digite sua cor preferida: ")
  let cores=[cor1,cor2,cor3]
  console.log(cores)
  
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let frase = string
  frase = frase.toUpperCase()
  return frase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const totIngressos = custo/valorIngresso
  return totIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   const iguais = string1.length === string2.length;
   return iguais
   
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0];
  const ultimo = array[array.length-1];
  array[0] = ultimo;
  array[array.length-1]=primeiro;
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string0 = string1.toLowerCase();
  const string3 = string2.toLowerCase();
  return string0 == string3
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = parseInt(prompt("Insira o ano atual: "))
  const anoNasci = parseInt(prompt('Insira seu ano de nascimento: '))
  const anoCart = parseInt(prompt('Insira o ano em que sua carteira de identidade foi emitida: '))
  const idade = anoAtual-anoNasci;
  const idadeCI = anoAtual-anoCart;

  const renovar = idade <= 20 && idadeCI >= 5 ||
  idade > 20 && idade <= 50 && idadeCI >= 10 || 
  idade > 50 && idadeCI >= 15
console.log(renovar);
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano%4 === 0) && (ano%100!==0)||(ano%400===0)
  return bissexto;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade= prompt('Você tem mais de 18 anos?');
  const ensinoMedio = prompt('possui ensino médio completo?');
  const disponibilidade = prompt('possui disponibilidade exclusiva durante os horários do curso?');
  const resposta = (idade === 'sim' && ensinoMedio  === 'sim' && disponibilidade === 'sim');
  console.log(resposta) ;
  
  // implemente sua lógica aqui

}