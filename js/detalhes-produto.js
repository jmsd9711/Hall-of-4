document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('produto');

    const allProducts = [
        { id: '1', name: 'Tênis Exemplo 1', price: 799.99, image: '../images/image01Tenis.webp', description: 'Um tênis esportivo de alta performance, ideal para corrida e treinos intensos. Conforto e durabilidade garantidos.' },
        { id: '2', name: 'Tênis Exemplo 2', price: 599.99, image: '../images/image02Tenis.webp', description: 'Tênis casual com design moderno, perfeito para o dia a dia. Combina estilo e leveza para qualquer ocasião.' },
        { id: '3', name: 'Tênis Exemplo 3', price: 299.99, image: '../images/image03Tenis.webp', description: 'Modelo clássico e versátil, ideal para caminhadas e uso urbano. Solado macio e ajuste confortável.' },
        { id: '4', name: 'Tênis Exemplo 4', price: 399.99, image: '../imagesServicos/tenis1.webp', description: 'Tênis de corrida com amortecimento responsivo, projetado para otimizar seu desempenho.' },
        { id: '5', name: 'Tênis Exemplo 5', price: 499.99, image: '../imagesServicos/tenis2.webp', description: 'Estilo e conforto se encontram neste tênis urbano. Perfeito para quem busca um visual moderno.' },
        { id: '6', name: 'Tênis Exemplo 6', price: 499.99, image: '../images/image01Tenis.webp', description: 'Tênis de basquete com suporte extra no tornozelo e excelente tração.' },
        // Camisas
        { id: '7', name: 'Camisa Exemplo 1', price: 99.99, image: '../images/image02Camisas.webp', description: 'Camisa de algodão macio, ideal para o dia a dia. Conforto e estilo em uma peça.' },
        { id: '8', name: 'Camisa Exemplo 2', price: 129.99, image: '../images/image01Camisas.webp', description: 'Camisa polo clássica, perfeita para um look mais arrumado e casual.' },
        { id: '9', name: 'Camisa Exemplo 3', price: 89.99, image: '../images/image03Camisas.webp', description: 'Camisa com design exclusivo, para quem gosta de se destacar.' },
        { id: '10', name: 'Camisa Exemplo 4', price: 119.99, image: '../imagesServicos/image01Anccamisas.webp', description: 'Camisa do Real Madrid com tecnologia que absorve o suor, mantendo você seco e confortável.' },
        { id: '11', name: 'Camisa Exemplo 5', price: 109.99, image: '../imagesServicos/image02Anccamisas.webp', description: 'Camisa da seleção francesa, com tecido térmico e respirável.' },
        { id: '12', name: 'Camisa Exemplo 6', price: 109.99, image: '../imagesServicos/image03Anccamisas.webp', description: 'Camisa de time Manchester City de algodão orgânico, sustentável e confortável para o uso diário.' },
    ];

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
