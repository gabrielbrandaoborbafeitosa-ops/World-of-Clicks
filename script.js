function pontos() {
    const pontos = Number(localStorage.getItem("pontos") || 0);
    const novoValor = pontos + 1;

    localStorage.setItem("pontos", novoValor);
    document.getElementById("botao").innerText = novoValor;
}

function maisextras(extras, pt) {
    const pontos = Number(localStorage.getItem("pontos") || 0);

    if (pontos >= pt) {
        const extrasvar = Number(localStorage.getItem("extras") || 0);

        const novoValor = extrasvar + extras;

        localStorage.setItem("extras", novoValor);
        localStorage.setItem("pontos", pontos - pt);

        document.getElementById("strongextras").innerText = "Extras: " + novoValor;
        document.getElementById("botao").innerText = pontos - pt;
    } else {
        alert("Não há pontos suficientes.");
    }
}
