const linhas = document.querySelectorAll("tbody tr");

//Mostra quantas aulas existem.

const aulas = document.querySelectorAll('tbody tr[data-tipo~="aula"]');

const atividades = document.querySelectorAll('tbody tr[data-tipo~="atividade"]');

const contadorAulas = document.getElementById("contadorAulas");

const contadorAtividades = document.getElementById("contadorAtividades");

contadorAulas.textContent = `${aulas.length} aulas`;

contadorAtividades.textContent = `${atividades.length} atividades`;


//Efeito quando o usuário clica em uma aula.

linhas.forEach((linha) => {

    linha.addEventListener("click", () => {

        linha.style.transform = "scale(0.99)";

        setTimeout(() => {

            linha.style.transform = "";

        }, 150);

    });

});


// isso aqui deu um trabalho que eu não sei nem explicar, mas enfim, consegui fazer a pesquisa funcionar,

const pesquisaAula = document.querySelector("#pesquisaAula");

pesquisaAula.addEventListener("input", filtrar);

function filtrar() {

    const pesquisa = pesquisaAula.value.toLowerCase();

    linhas.forEach((linha) => {

        const textoDaLinha = linha.textContent.toLowerCase();

        const resultado = textoDaLinha.includes(pesquisa);

        if (resultado) {

            linha.style.display = "";

        } else {

            linha.style.display = "none";

        }

    });

}