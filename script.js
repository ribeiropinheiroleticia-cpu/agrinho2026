// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU RESPONSIVO
    ========================= */

    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("ativo");
        });
    }


    /* =========================
       BOTÃO DE VOLTAR AO TOPO
    ========================= */

    const btnTopo = document.querySelector("#btnTopo");

    window.addEventListener("scroll", function () {
        if (btnTopo) {
            if (window.scrollY > 300) {
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        }
    });

    if (btnTopo) {
        btnTopo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* =========================
       ANIMAÇÃO AO ROLAR A PÁGINA
    ========================= */

    const elementos = document.querySelectorAll(".animar");

    function mostrarNaTela() {
        elementos.forEach(function (el) {
            const posicao = el.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela - 100) {
                el.classList.add("visivel");
            }
        });
    }

    window.addEventListener("scroll", mostrarNaTela);
    mostrarNaTela();


    /* =========================
       VALIDAÇÃO DE FORMULÁRIO
    ========================= */

    const form = document.querySelector("#formContato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.querySelector("#nome");
            const email = document.querySelector("#email");
            const mensagem = document.querySelector("#mensagem");

            if (!nome.value || !email.value || !mensagem.value) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            if (!email.value.includes("@")) {
                alert("Digite um e-mail válido!");
                return;
            }

            alert("Mensagem enviada com sucesso!");

            form.reset();
        });
    }


    /* =========================
       TROCA DE TEXTO INTERATIVO
    ========================= */

    const botaoInfo = document.querySelector("#botaoInfo");
    const textoInfo = document.querySelector("#textoInfo");

    if (botaoInfo && textoInfo) {
        botaoInfo.addEventListener("click", function () {
            textoInfo.textContent =
                "O AGRINHO 2026 valoriza o campo, a tecnologia e o futuro sustentável!";
        });
    }

});
