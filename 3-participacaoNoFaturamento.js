const faturamentoMensal = [{
    "uf": 'SP',
    "valor": 67836.43
  },
  {
    "uf": 'RJ',
    "valor": 36678.66
  },
  {
    "uf": 'MG',
    "valor": 29229.88
  },
  {
    "uf": 'ES',
    "valor": 27165.48
  },
  {
    "uf": 'OUTROS',
    "valor": 19849.53
  }
]

/*Definindo o faturamento mensal total e depois calculando 
o percentual de acordo com o estado que foi passado como 
parâmetro*/
function calculoFaturamentoMensal(array, estado) {
  let faturamentoTotalMensal = 0
  for (let i = 0; i < array.length; i++) {
    faturamentoTotalMensal += array[i].valor
  }
  
  let percentualNoFaturamento = 0
  for (let i = 0; i < array.length; i++) {
    if (estado.toLowerCase() == array[i].uf.toLowerCase()) {
      percentualNoFaturamento  = (array[i].valor / faturamentoTotalMensal) * 100
    } else {
      return "Insira um estado válido"
    }

    return percentualNoFaturamento
  }
}