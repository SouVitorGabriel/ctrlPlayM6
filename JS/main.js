var numero = 1;

var numero2 = 2.54567;

var frase = "Olar";

var verdade = true;

var num = numero + numero2;
/* document.write(num); */

/* var nome = prompt("Escreva seu nome:", "Nome aqui..."); */


/* 
document.write("<h2>Olar senhor(a) " + nome +" ao meu site."); */
/* document.write("<br> Olar");

alert("Oi!"); */

/* var num1 = parseInt(prompt("Escreva o primeiro número:"));
var num2 = parseInt(prompt("Escreva o segundo número:"));

var operacao = prompt("Escreva a operação (som, sub, div,mul"); */
/* 
if (operacao == "som")
{
    document.write("<br> Soma dos números deu: " + (num1 + num2));
}
else if (operacao == "sub")
{
    document.write("<br> Subtração dos números deu: " + (num1 - num2));
}
else if (operacao == "div")
{
    document.write("<br> Divisão dos números deu: " + (num1 / num2));
}
else if (operacao == "mul")
{
    document.write("<br> Multiplicaçaõ dos números deu: " + (num1 * num2));
}
else
{
    document.write("Erro, por favor reinicie a página");
} */

/* switch (operacao)
{
    case "som":
        document.write("<br> Soma dos números deu: " + (num1 + num2));
        break;
    case "sub":
        document.write("<br> Subtração dos números deu: " + (num1 - num2));
        break;
    case "div":
        document.write("<br> Divisão dos números deu: " + (num1 / num2));
        break;
    case "mul":
        document.write("<br> Multiplicaçaõ dos números deu: " + (num1 * num2));
        break;
    default:
        document.write("Erro, por favor reinicie a página");
} */

//Criando Vetores

var linguagens = ["javaScipt", "Java", "Cascade Style Sheet", "HTML", "Python", "C#", "C++"];

var series = [];
series[0] = "Mr. Robot";
series["segunda"] = "Stranger Things";
series[false] = "The Walking Dead";
series[true] = "Aggretsuko";
series[1] = "Black Mirror";

series.forEach(element => {
    console.log(element);
});

console.log(series["segunda"]);
console.log(series[false]);
console.log(series[true]);
console.log(series.pop());
console.log(series.shift());

var corsa = ["Motorista_Corsa", "Passageiro_Corsa1", "Passageiro_Corsa2"];
var civic = ["Motorista_Civic", "Passageiro_Civic1", "Passageiro_Civic2"];
var gol = ["Motorista_Gol", "Passageiro_Gol1", "Passageiro_Gol2"];

var carros = [corsa, civic, gol];

document.write("<table style= 'border: 1px solid black'>");
for (var i = 0; i < carros.length; i++) 
{
    document.write("<tr style = 'border: 1px, solid black'>");
    for (var j = 0; j < carros[i].length; j++) 
    {
        document.write("<th style = 'border: 1px solid black'>" + carros[i][j] + "</th> ");
    }
    document.write("</tr>");
}
document.write("</table>");



