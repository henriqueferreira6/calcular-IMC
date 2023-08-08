function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);

    let resultadoElement = document.getElementById("resultado");

    if (imc < 18.5) {
        resultadoElement.textContent = `Seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso.`;
    } else {
        resultadoElement.textContent = `Seu IMC é de ${imc.toFixed(2)}. Você está acima do peso.`;
    }
}