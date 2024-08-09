const colors =[ "red", "blue", "orange", "purple", "yellow", "green"];
function cambiarColor() {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("texto").style.color = colorAleatorio;
}

setInterval(cambiarColor, 500);