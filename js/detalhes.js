document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    const modal = document.getElementById('product-detail-modal');
    const closeButton = document.querySelector('.close-button');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductTitle = document.getElementById('modal-product-title');
    const modalProductPrice = document.getElementById('modal-product-price');

    function openModal(product) {
        modalProductImage.src = product.dataset.image;
        modalProductTitle.textContent = product.dataset.name;
        modalProductPrice.textContent = `R$ ${parseFloat(product.dataset.price).toFixed(2).replace('.', ',')}`;
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; 
        document.body.style.paddingRight = '0'; 
    }

    function closeModal() {
        modal.style.display = 'none'; 
        document.body.style.overflow = ''; 
        document.body.style.paddingRight = ''; 
    }

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
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
