document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO PARA TROCA DE CORES DO IPHONE ---

    const colorSwatches = document.querySelectorAll('.color-swatch');

    const iphoneImage = document.getElementById('iphone-product-image');

    // Mapeamento de cores para URLs de imagem (VOCÊ PRECISARÁ ATUALIZAR ESTES CAMINHOS/IMAGENS)

    const colorImages = {

        blue: 'https://i.postimg.cc/Yqhf0Cy1/download-7-removebg-preview.png',

        yellow: 'https://i.postimg.cc/brywFr4d/download-1-removebg-preview.png',

        gray: 'https://i.postimg.cc/W1pVgxg6/iphone-14-plus-500x500-removebg-preview.png',

        black: 'https://i.postimg.cc/8PJPs2dF/download-6-removebg-preview.png',

        red: 'https://i.postimg.cc/bw5x1cWK/download-5-removebg-preview.png',

        purple: 'https://i.postimg.cc/L4qMVzJw/download-4-removebg-preview.png'

    };

    colorSwatches.forEach(swatch => {

        swatch.addEventListener('click', () => {

            // Remove a classe 'selected' de todas as bolinhas

            colorSwatches.forEach(s => s.classList.remove('selected'));

            // Adiciona a classe 'selected' à bolinha clicada

            swatch.classList.add('selected');

            // Obtém a cor selecionada (ex: 'red', 'blue')

            const selectedColor = swatch.dataset.color;

            // Atualiza a imagem do iPhone com base na cor selecionada

            if (colorImages[selectedColor]) {

                iphoneImage.src = colorImages[selectedColor];

                iphoneImage.alt = `iPhone 14 ${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`; // Atualiza o alt da imagem

            }

        });

    });

    // --- CÓDIGO PARA MODO ESCURO/CLARO ---

    const darkModeToggle = document.getElementById('darkModeToggle'); // Pega o botão (ou div) de alternância pelo ID

    // Função para aplicar o tema (claro ou escuro)

    function applyTheme(theme) {

        if (theme === 'dark') {

            document.body.classList.add('dark-mode'); // Adiciona a classe dark-mode

            // Você pode querer mudar o texto do botão aqui também

            if (darkModeToggle) {

                darkModeToggle.textContent = 'Modo Claro';

            }

        } else {

            document.body.classList.remove('dark-mode'); // Remove a classe dark-mode

            if (darkModeToggle) {

                darkModeToggle.textContent = 'Modo Escuro';

            }

        }

        localStorage.setItem('theme', theme); // Salva a preferência do usuário no armazenamento local

    }

    // --- LÓGICA DE INICIALIZAÇÃO DO TEMA ---

    // 1. Tenta carregar a preferência salva do usuário

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {

        applyTheme(savedTheme); // Aplica o tema salvo

    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        // 2. Se não houver preferência salva, verifica a preferência do sistema operacional

        applyTheme('dark');

    } else {

        // 3. Se nenhuma das anteriores, define o padrão como 'light'

        applyTheme('light');

    }

    // --- EVENT LISTENER PARA O BOTÃO DE ALTERNÂNCIA ---

    if (darkModeToggle) { // Garante que o botão existe antes de adicionar o listener

        darkModeToggle.addEventListener('click', () => {

            const currentTheme = localStorage.getItem('theme');

            if (currentTheme === 'dark') {

                applyTheme('light'); // Se o tema atual é escuro, muda para claro

            } else {

                applyTheme('dark'); // Se o tema atual é claro, muda para escuro

            }

        });

    }

    // --- FIM DO CÓDIGO JavaScript ---

});

