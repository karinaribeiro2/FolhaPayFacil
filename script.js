document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = parseInt(document.getElementById("codigo").value);
    const horas = parseInt(document.getElementById("horas").value);
    const turno = document.getElementById("turno").value.toUpperCase();
    const categoria = document.getElementById("categoria").value.toUpperCase();
    const salarioMinimo = parseFloat(document.getElementById("salarioMinimo").value);

    let valorHora;
    
    switch (categoria) {
        case 'G':
            if (turno === 'M' || turno === 'V') {
                valorHora = 0.04 * salarioMinimo;
            }
            break;
        case 'F':
            if (turno === 'N') {
                valorHora = 0.02 * salarioMinimo;
            } else if (turno === 'M' || turno === 'V') {
                valorHora = 0.01 * salarioMinimo;
            }
            break;
    }

    const salarioInicial = valorHora * horas;

    let auxilioAlimentacao;
    if (salarioInicial <= 800) {
        auxilioAlimentacao = 0.25 * salarioInicial;
    } else if (salarioInicial <= 1200) {
        auxilioAlimentacao = 0.20 * salarioInicial;
    } else {
        auxilioAlimentacao = 0.15 * salarioInicial;
    }

    const salarioFinal = salarioInicial + auxilioAlimentacao;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Código:</strong> ${codigo}</p>
        <p><strong>Horas Trabalhadas:</strong> ${horas}</p>
        <p><strong>Valor da Hora Trabalhada:</strong> R$ ${valorHora.toFixed(2)}</p>
        <p><strong>Salário Inicial:</strong> R$ ${salarioInicial.toFixed(2)}</p>
        <p><strong>Auxílio Alimentação:</strong> R$ ${auxilioAlimentacao.toFixed(2)}</p>
        <p><strong>Salário Final:</strong> R$ ${salarioFinal.toFixed(2)}</p>
    `;
});
