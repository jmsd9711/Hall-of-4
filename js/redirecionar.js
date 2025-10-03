document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar os produtos do arquivo JSON
    async function loadProducts() {
        try {
            const response = await fetch('../data/products.json'); // Caminho para o seu arquivo JSON
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro ao carregar os produtos:', error);
            return []; // Retorna um array vazio em caso de erro
        }
    }

    // Função para renderizar os produtos na página
    async function renderProducts() {
        const allProducts = await loadProducts();
        const productsGridTenis = document.querySelector('.featured-products:nth-of-type(1) .products-grid');
        const productsGridCamisas = document.querySelector('.featured-products:nth-of-type(2) .products-grid');

        productsGridTenis.innerHTML = ''; // Limpa o conteúdo existente
        productsGridCamisas.innerHTML = ''; // Limpa o conteúdo existente

        allProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.setAttribute('data-id', product.id);
            productCard.setAttribute('data-name', product.name);
            productCard.setAttribute('data-price', product.price);
            productCard.setAttribute('data-image', product.image);
            productCard.setAttribute('data-description', product.description);

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                </div>
            `;

            if (product.name.includes('Tênis')) {
                productsGridTenis.appendChild(productCard);
            } else if (product.name.includes('Camisa')) {
                productsGridCamisas.appendChild(productCard);
            }

            // Adiciona os event listeners para cada card
            productCard.style.cursor = 'pointer'; 
            productCard.addEventListener('click', () => {
                const productId = productCard.dataset.id;
                window.location.href = `detalhes.html?produto=${productId}`; 
            });
            productCard.addEventListener('mouseenter', () => {
                productCard.style.transform = 'scale(1.02)';
                productCard.style.transition = 'transform 0.2s ease';
            });
            productCard.addEventListener('mouseleave', () => {
                productCard.style.transform = 'scale(1)';
            });
        });
    }

    renderProducts();
});
