document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('.article');
    const totalElement = document.getElementById('total');

    articles.forEach(article => {
        const plusButton = article.querySelector('.btn-plus');
        const moinsButton = article.querySelector('.btn-moins');
        const quantityElement = article.querySelector('.quantity');
        const priceElement = article.querySelector('.price');

        // Mettre à jour le prix initial
        updateTotal();

        // Événement pour le bouton +
        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        // Événement pour le bouton -
        moinsButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    function updateTotal() {
        let total = 0;

        articles.forEach(article => {
            const price = parseInt(article.querySelector('.price').textContent);
            const quantity = parseInt(article.querySelector('.quantity').textContent);
            total += price * quantity;
        });

        totalElement.textContent = total; // Mettre à jour le prix total
    }
});
