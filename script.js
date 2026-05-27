document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONTROLE DO TAMANHO DA FONTE ---
    const elementosTexto = document.querySelectorAll('.texto-dinamico');
    let tamanhoFonte = 16; // Tamanho padrão padrão

    document.getElementById('font-up').addEventListener('click', () => {
        if (tamanhoFonte < 24) {
            tamanhoFonte += 2;
            atualizarTamanho();
        }
    });

    document.getElementById('font-down').addEventListener('click', () => {
        if (tamanhoFonte > 12) {
            tamanhoFonte -= 2;
            atualizarTamanho();
        }
    });

    function atualizarTamanho() {
        elementosTexto.forEach(el => el.style.fontSize = `${tamanhoFonte}px`);
    }

    // --- 2. MODALIDADE ALTO CONTRASTE ---
    document.getElementById('btn-contraste').addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // --- 3. TEXT-TO-SPEECH (LEITURA POR VOZ) ---
    const btnVoz = document.getElementById('btn-voz');
    let noAr = false;

    btnVoz.addEventListener('click', () => {
        if (noAr) {
            window.speechSynthesis.cancel();
            btnVoz.textContent = "Ouvir Página";
            noAr = false;
        } else {
            let textoCompleto = "";
            document.querySelectorAll('.secao-leitura').forEach(secao => {
                textoCompleto += secao.innerText + " . ";
            });

            let emissao = new SpeechSynthesisUtterance(textoCompleto);
            emissao.lang = 'pt-BR';
            
            emissao.onend = () => {
                btnVoz.textContent = "Ouvir Página";
                noAr = false;
            };

            btnVoz.textContent = "Parar Leitura";
            window.speechSynthesis.speak(emissao);
            noAr = true;
        }
    });
});
