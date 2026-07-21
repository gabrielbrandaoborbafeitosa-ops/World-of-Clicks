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
function converter() {
localStorage.setItem(
    "pontos",
    Number(localStorage.getItem("pontos") || 0) +
    Number(localStorage.getItem("extras") || 0)
);

    const botao = document.getElementById("converter");

const fimEspera = localStorage.getItem("fimEspera");

if (fimEspera && Date.now() < Number(fimEspera)) {
    botao.disabled = true;

    setTimeout(() => {
        botao.disabled = false;
        localStorage.removeItem("fimEspera");
    }, Number(fimEspera) - Date.now());

} else {
    botao.disabled = false;

    const umaSemana = 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem("fimEspera", Date.now() + umaSemana);

    botao.disabled = true;

    setTimeout(() => {
        botao.disabled = false;
        localStorage.removeItem("fimEspera");
    }, umaSemana);
}
}
