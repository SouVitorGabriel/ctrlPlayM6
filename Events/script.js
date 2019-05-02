var texto = document.getElementById("h1");

texto.addEventListener("mouseup", function()
{
    console.log("Mouse Apertado!");
    texto.style.color = "blue";
}, false);