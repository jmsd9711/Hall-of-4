document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-detail-modal');
    const closeButton = document.querySelector('.close-button');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductTitle = document.getElementById('modal-product-title');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description'); // Adicionado para a descrição no modal

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

    async function openModal(productId) {
        const allProducts = await loadProducts();
        const product = allProducts.find(p => p.id === productId);

        if (product) {
            modalProductImage.src = product.image;
            modalProductTitle.textContent = product.name;
            modalProductPrice.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
            modalProductDescription.textContent = product.description; // Define a descrição
            modal.style.display = 'flex'; 
            document.body.style.overflow = 'hidden'; 
            document.body.style.paddingRight = '0'; 
        } else {
            console.error('Produto não encontrado para o modal:', productId);
        }
    }

    function closeModal() {
        modal.style.display = 'none'; 
        document.body.style.overflow = ''; 
        document.body.style.paddingRight = ''; 
    }

    // Adiciona event listeners aos cards de produto para abrir o modal
    // Isso deve ser feito após os cards serem renderizados pelo redirecionar.js
    // Ou você pode chamar esta função de dentro do redirecionar.js após a renderização.
    // Por simplicidade, vamos adicionar um listener genérico que espera os cards existirem.
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.id);
        });
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
