// Preço e Porcentagens
var CDF = 20000
var CDD = 0.3
var Impostos = 0.45

//Calculo do Dos Impostos
var PAC1 = CDF * CDD
var PAC2 = CDF * Impostos

//Preço total
var PT = CDF + PAC1 + PAC2

//Mensagem
console.log("O Preço do Custo total do Carro Tirando O Lucro é "+PT);