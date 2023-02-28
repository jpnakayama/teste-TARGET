function fazParteSequenciaFibonacci(n) {
  //Criação de duas variáveis que irão se somar em loop
  //A variável "fib" irá sempre ser um valor que pertence à sequência de Fibonacci
  let fibAnterior = 0
  let fibAtual = 1

  //A criação da variável temporária (fibTemp) serve para que o número atual da sequência de Fibonacci seja armazenado para o próximo loop em que ele terá o valor de fibAnterior
  while (fibAtual < n) {
    let fibTemp = fibAtual
    fibAtual = fibAnterior + fibAtual
    fibAnterior = fibTemp
  }

  //Retornar se o valor informado faz parte da sequência de Fibonnaci
  return fibAtual === n
}