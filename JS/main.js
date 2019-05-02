var numero = 1;

var numero2 = 2.54567;

var frase = "Olar";

var verdade = true;

var num = numero + numero2;

var mouse_x;
var mouse_y;
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

/* var linguagens = ["javaScipt", "Java", "Cascade Style Sheet", "HTML", "Python", "C#", "C++"];

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
document.write("</table>"); */

var movimentoMouse = function(e)
{
    mouse_x = e.x;
    mouse_y = e.y;
}

var _mouseUp = function(e)
{
    mouse_pressed = false;

    console.log("Mouse release");
}	

var _mouseDown = function(e)
{
    mouse_presses = true
    console.log("Mouse pressed");
}

var el = document.getElementById("centrao");

el.addEventListener("click", function() {
    document.getElementById("1").style.backgroundColor = "#00e9ff";
}, false);

// registrando as fun��es
document.addEventListener("mousemove", movimentoMouse, false);
document.addEventListener("mouseup",   _mouseUp,   false);
document.addEventListener("mousedown", _mouseDown, false);


var hist1 = document.getElementById("historia_1");

var hist2 = $("#historia_2");

var historia = function(parte)
{
    switch(parte)
    {
        case 1:
        hist1.innerHTML = hist1.innerHTML + "<BR>Era uma vez um botão que modificava o conteúdo interno de elementos HTML...";
            break;
        case 2:
            hist2.html("<br>Esse tipo de mofificação é versátil pois muda o site confome a demanda do usuário.<br>");
            break; 
        case 3:
            var divs = document.getElementsByClassName("historia");
            divs[0].innerHTML = "Inclusive exemplos juntos de classes.";
            divs[1].innerHTML = "Inclusive exemplos juntos de classes.";
            divs[2].innerHTML = "Inclusive exemplos juntos de classes.";
            break;
    }
}

function ocultar(tag)
{
    $("#" + tag).hide("slow");
}

function ocultarClasse2(tag)
{
    $(tag).hide("slow");
}

function ocultarClasse()
{
    $(".meio").slideUp("slow");
    $(".direita").slideUp("slow");
    $(".esquerda").slideUp("slow");
}

function mostrar()
{
    $(".meio").slideDown("slow");
    $(".direita").slideDown("slow");
    $(".esquerda").slideDown("slow");
}

function Apresentacao()
{
    console.log("Olar, estou funcionando");
    alert("Olar, estou funcionando");
}


var Cumprimento = function(nome)
{
    console.log("Olar, sou " + nome + "e estou programando");
    alert("Olar, sou " + nome + "e estou programando");
}


function Calculo(operacao, num1, num2)
{
    switch (operacao)
    {
        case "som":
        case 1:
            console.log("<br> Soma dos números deu: " + (num1 + num2));
            break;
        case "sub":
        case 2:
            console.log("<br> Subtração dos números deu: " + (num1 - num2));
            return (num1 - num2);
            break;
        case "div":
        case 3:
            console.log("<br> Divisão dos números deu: " + (num1 / num2));
            break;
        case "mul":
        case 4:
            console.log("<br> Multiplicaçaõ dos números deu: " + (num1 * num2));
            break;
        default:
            console.log("Erro, por favor reinicie a página");
            
    }
}

Calculo("som", 10, 15);

Calculo(1, 100, 150);

var somatoria = Calculo("sub", 150, 20);

console.log(somatoria);
