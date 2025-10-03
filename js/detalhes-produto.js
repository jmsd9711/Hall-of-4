document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('produto');

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

    loadProducts().then(allProducts => {
        const product = allProducts.find(p => p.id === productId);

        if (product) {
            document.getElementById('detail-product-image').src = product.image;
            document.getElementById('detail-product-title').textContent = product.name;
            document.getElementById('detail-product-price').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('detail-product-description').textContent = product.description;
            document.title = `Detalhes de ${product.name}`;
        } else {
            document.getElementById('detail-product-title').textContent = 'Produto não encontrado';
            document.getElementById('detail-product-description').textContent = 'Desculpe, o produto que você procura não está disponível.';
            document.getElementById('detail-product-image').style.display = 'none'; 
            document.getElementById('detail-product-price').style.display = 'none'; 
            document.getElementById('add-to-cart-detail').style.display = 'none'; 
            document.title = 'Produto não encontrado';
        }
    });
});
