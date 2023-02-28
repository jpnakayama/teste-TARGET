function inverteString(palavra) {
  /*Inicio uma variável com uma string vazia que irá receber, 
  em sentido inverso (de trás para frente) as letras da 
  palavra passada como parâmetro*/
  let palavraInvertida = ''

  /*Defino que a iteração irá se iniciar pela última letra da 
  palavra passada como parâmetro(o -1 é necessário para 
  conseguir ter acesso ao último índice da palavra - que 
  corresponde a última letra); faço a iteração rodar até 
  que a primeira letra seja lida (i = 0); e defino que a 
  iteração irá correr da última letra para a primeira.*/
  for (let i = palavra.length - 1; i >=0; i--) {
    palavraInvertida += palavra[i]
  }

  return palavraInvertida
}