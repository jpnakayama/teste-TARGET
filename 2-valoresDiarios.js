fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    //Definindo uma variável para armazenar o array
    let arrayFaturamento = data    
    
    //Criando a função para calcular o menor faturamento
    /*A função se baseia em comparação entre os valores de
    faturamento diário. Se o faturamento for menor que o dia
    anterior e diferente de 0, seu valor é atribuído à
    variável menorValor*/
    function calculaMenorFaturamentoDiario(array) {
      let menorValor = array[0].valor
    
        for (let i = 0; i < array.length; i++) {
          if (array[i].valor < menorValor && array[i].valor != 0) {
            menorValor = array[i].valor
          }
        }
    
        return menorValor
    }

    //Criando a função para calcular o maior faturamento
    /*A função se baseia em comparação entre os valores de 
    faturamento diário. Se o faturamento for maior que o dia 
    anterior, seu valor é atribuído à variável maiorValor*/
    function calculaMaiorFaturamentoDiario(array) {
      let maiorValor = array[0].valor

      for (let i = 0; i < array.length; i++) {
        if (array[i].valor > maiorValor) {
          maiorValor = array[i].valor
        }
      }

      return maiorValor
    }

    function diasAcimaDaMedia(array) {
      /*Definindo a média de faturamento excluindo os dias em 
      que o faturamento é 0*/
      let faturamentoTotal = 0      
      for (let i = 0; i < array.length; i++) {
        faturamentoTotal += array[i].valor
      }

      let diasUteis = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i].valor != 0) {
          diasUteis++
        }
      }

      let faturamentoMedio = faturamentoTotal / diasUteis

      /*Calculando quantos dias o faturamento foi acima do 
      faturamento medio calculado*/
      let qtdDiasAcimaDaMedia = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i].valor > faturamentoMedio) {
          qtdDiasAcimaDaMedia++
        }
      }

      return qtdDiasAcimaDaMedia
    }
  }
)
