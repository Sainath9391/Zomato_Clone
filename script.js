// JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Location selector functionality
            const locationSelector = document.querySelector('.location-selector');
            locationSelector.addEventListener('click', function() {
                alert('Location selection feature coming soon!');
            });

            // Search functionality
            const searchButton = document.querySelector('.search-bar button');
            const searchInput = document.querySelector('.search-bar input');
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                } else {
                    alert('Please enter a search term');
                }
            });

            // Cuisine item click functionality
            const cuisineItems = document.querySelectorAll('.cuisine-item');
            cuisineItems.forEach(item => {
                item.addEventListener('click', function() {
                    const cuisineName = this.querySelector('p').textContent;
                    alert(`You selected ${cuisineName} cuisine`);
                });
            });

            // Restaurant card click functionality
            const restaurantCards = document.querySelectorAll('.restaurant-card');
            restaurantCards.forEach(card => {
                card.addEventListener('click', function() {
                    const restaurantName = this.querySelector('.restaurant-name').textContent;
                    alert(`You selected ${restaurantName}`);
                });
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
        const cuisineGrid = document.querySelector(".cuisine-grid");
        const leftBtn = document.querySelector(".left-btn");
        const rightBtn = document.querySelector(".right-btn");

        leftBtn.addEventListener("click", () => {
            cuisineGrid.scrollBy({ left: -200, behavior: "smooth" });
        });

        rightBtn.addEventListener("click", () => {
            cuisineGrid.scrollBy({ left: 200, behavior: "smooth" });
        });
    });