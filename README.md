# index.html
Projeto "Terra do Amanhã", voltado para o concurso Agrinho.
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terra do Amanhã | Agrinho</title>
    <!-- Tailwind CSS para Estilização Rápida e Responsiva -->
    <script src="https://tailwindcss.com"></script>
    <!-- Google Fonts: Playfair Display e Inter -->
    <link rel="preconnect" href="https://googleapis.com">
    <link rel="preconnect" href="https://gstatic.com" crossorigin>
    <link href="https://googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
    <!-- Arquivo de Estilos Personalizados -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-stone-100 text-stone-900 transition-colors duration-300">

    <!-- HUB DE ACESSIBILIDADE -->
    <div id="accessibility-hub" class="fixed bottom-5 right-5 z-50 bg-white dark-panel p-4 rounded-xl shadow-2xl border border-stone-200 transition-all">
        <h3 class="font-bold text-sm mb-3 text-stone-700 dark-text">♿ Hub de Acessibilidade</h3>
        
        <!-- Controle de Fonte -->
        <div class="flex items-center justify-between gap-4 mb-3">
            <span class="text-xs font-semibold dark-text">Tamanho do Texto:</span>
            <div class="flex gap-1">
                <button id="btn-decrease" class="px-2 py-1 bg-stone-200 hover:bg-stone-300 rounded text-xs font-bold">-</button>
                <button id="btn-increase" class="px-2 py-1 bg-stone-200 hover:bg-stone-300 rounded text-xs font-bold">+</button>
            </div>
        </div>

        <!-- Modo Escuro -->
        <div class="flex items-center justify-between gap-4 mb-3">
            <span class="text-xs font-semibold dark-text">Alto Contraste:</span>
            <button id="btn-dark" class="px-3 py-1 bg-stone-800 text-white rounded text-xs font-semibold">Ativar</button>
        </div>

        <!-- Leitura de Voz -->
        <div class="flex items-center justify-between gap-4">
            <span class="text-xs font-semibold dark-text">Leitura de Voz:</span>
            <button id="btn-tts" class="px-3 py-1 bg-green-700 text-white rounded text-xs font-semibold hover:bg-green-800">Ouvir Página</button>
        </div>
    </div>

    <!-- HEADER / HERO SECTION -->
    <header class="min-h-screen flex flex-col justify-between p-6 md:p-12 border-b border-stone-300 dynamic-text">
        <div class="flex justify-between items-center w-full">
            <span class="font-bold tracking-widest text-xs uppercase text-green-800 dark-text-accent">Projeto Agrinho</span>
            <span class="text-xs text-stone-500 dark-text-muted">Edição Especial</span>
        </div>

        <div class="max-w-4xl my-auto scroll-reveal">
            <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-stone-950 dark-text">
                Terra do <span class="italic text-green-700 dark-text-accent">Amanhã</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed dark-text-muted">
                Uma landing page que explora o futuro do agronegócio sustentável. O projeto une um design sofisticado com recursos robustos de inclusão digital.
            </p>
        </div>

        <div class="text-xs text-stone-400 dark-text-muted">
            Role para explorar ↓
        </div>
    </header>

    <!-- SEÇÃO: OBJETIVO DO PROJETO -->
    <section class="py-24 px-6 md:px-12 max-w-6xl mx-auto dynamic-text speech-section">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="scroll-reveal">
                <span class="text-xs font-bold uppercase tracking-wider text-green-700 dark-text-accent">01 / PROPÓSITO</span>
                <h2 class="font-serif text-3xl md:text-4xl mt-2 mb-6 text-stone-950 dark-text">Objetivo do Projeto</h2>
                <p class="text-stone-600 leading-relaxed dark-text-muted">
                    Demonstrar como a tecnologia pode ser aplicada tanto no campo (através da agricultura de precisão) quanto na interface do usuário (através de ferramentas de acessibilidade nativas), garantindo que a informação sobre sustentabilidade chegue a todos.
                </p>
            </div>
            <div class="scroll-reveal">
                <img src="https://unsplash.com" alt="Tecnologia no campo" class="rounded-lg filter sepia-[0.2] contrast-[0.9] shadow-xl w-full object-cover h-80">
            </div>
        </div>
    </section>

    <!-- SEÇÃO: RECURSOS E TECNOLOGIAS -->
    <section class="bg-stone-200 dark-section py-24 px-6 md:px-12 dynamic-text transition-colors duration-300">
        <div class="max-w-6xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider text-green-800 dark-text-accent">02 / ESTRUTURA</span>
            <h2 class="font-serif text-3xl md:text-4xl mt-2 mb-12 text-stone-950 dark-text">Recursos Técnicos & UI/UX</h2>
            
            <div class="grid md:grid-cols-3 gap-8 speech-section">
                <!-- Card 1 -->
                <div class="bg-stone-100 dark-panel p-6 rounded-lg scroll-reveal shadow-sm">
                    <h3 class="font-serif text-xl mb-3 text-stone-900 dark-text">♿ Hub de Acessibilidade</h3>
                    <p class="text-sm text-stone-600 dark-text-muted leading-relaxed">
                        Painel de controle exclusivo com ajuste dinâmico de fontes, modo escuro nativo por variáveis CSS e leitura de tela sequencial por voz.
                    </p>
                </div>
                <!-- Card 2 -->
                <div class="bg-stone-100 dark-panel p-6 rounded-lg scroll-reveal shadow-sm">
                    <h3 class="font-serif text-xl mb-3 text-stone-900 dark-text">🎨 UI/UX Editorial</h3>
                    <p class="text-sm text-stone-600 dark-text-muted leading-relaxed">
                        Design responsivo via Tailwind CSS com tipografia refinada (Playfair Display e Inter), criando uma hierarquia visual limpa e elegante.
                    </p>
                </div>
                <!-- Card 3 -->
                <div class="bg-stone-100 dark-panel p-6 rounded-lg scroll-reveal shadow-sm">
                    <h3 class="font-serif text-xl mb-3 text-stone-900 dark-text">⚡ Tecnologias Limpas</h3>
                    <p class="text-sm text-stone-600 dark-text-muted leading-relaxed">
                        Desenvolvido utilizando HTML5 Semântico e JavaScript Vanilla puro (ES6+), garantindo alta velocidade de carregamento e sem dependências pesadas.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 px-6 text-center border-t border-stone-300 text-xs text-stone-500 dark-text-muted">
        <p>© 2026 Terra do Amanhã. Projeto desenvolvido para o Concurso Agrinho.</p>
    </footer>

    <!-- Arquivo de Lógica do Sistema -->
    <script src="script.js"></script>
</body>
</html>
