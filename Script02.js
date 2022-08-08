//Notas
var Nota1 = 9.5
var Nota2 = 4.9
var Nota3 = 9.6


//Comando de Nota
var Peso1 = Nota1 * 2
var Peso2 = Nota2 * 3
var Peso3 = Nota3 * 5

var Notatotal = (Peso1 + Peso2 + Peso3) / 10

//Sistema Simples de Aprovação
if (Notatotal>=5) {
    console.log("Você passou =), Sua Nota é " +Notatotal);
} else {
    console.log("Você Não Passou =(, Sua Nota é "+Notatotal) ;
}
