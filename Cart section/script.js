document.addEventListener("DOMContentLoaded", () => {
    let cart = [
        { id: 1, name: "Burger", price: 150, quantity: 1, img: "https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=hthCHhBsUotyv4SCP8MdltTNv1bT6g5R9NIB1fufva0=" },
        { id: 2, name: "Pizza", price: 300, quantity: 1, img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBpenphfGVufDB8fDB8fHww" }
    ];

    const cartContainer = document.querySelector(".cart-items");
    const totalItems = document.getElementById("total-items");
    const totalPrice = document.getElementById("total-price");

    function renderCart() {
        cartContainer.innerHTML = "";
        let itemsCount = 0;
        let priceTotal = 0;

        cart.forEach(item => {
            itemsCount += item.quantity;
            priceTotal += item.quantity * item.price;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="quantity-controls">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <input type="text" value="${item.quantity}" readonly>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-btn" data-id="${item.id}">X</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        totalItems.textContent = itemsCount;
        totalPrice.textContent = priceTotal.toFixed(2);
    }

    cartContainer.addEventListener("click", (event) => {
        const id = parseInt(event.target.dataset.id);

        if (event.target.classList.contains("increase")) {
            cart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
        }

        if (event.target.classList.contains("decrease")) {
            cart = cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
        }

        if (event.target.classList.contains("remove-btn")) {
            cart = cart.filter(item => item.id !== id);
        }

        renderCart();
    });

    renderCart();
});
