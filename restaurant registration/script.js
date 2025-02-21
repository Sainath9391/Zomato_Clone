
        // Initialize Feather Icons
        feather.replace();

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Display Register Page First on Load
document.addEventListener("DOMContentLoaded", function() {
    showPage('register');
});

        // Sample data for menu items
        const menuItems = [
            { name: "Margherita Pizza", category: "Main Course", price: 12.99, status: "Available" },
            { name: "Caesar Salad", category: "Appetizer", price: 8.99, status: "Available" },
            { name: "Chocolate Brownie", category: "Dessert", price: 6.99, status: "Out of Stock" },
            { name: "Iced Tea", category: "Beverage", price: 2.99, status: "Available" },
            { name: "Spaghetti Carbonara", category: "Main Course", price: 14.99, status: "Available" }
        ];

        // Sample data for orders
        const orders = [
            { id: "ORD001", customer: "John Doe", items: "Margherita Pizza, Iced Tea", total: 15.98, status: "Delivered" },
            { id: "ORD002", customer: "Jane Smith", items: "Caesar Salad, Spaghetti Carbonara", total: 23.98, status: "Preparing" },
            { id: "ORD003", customer: "Mike Johnson", items: "Chocolate Brownie, Iced Tea", total: 9.98, status: "Out for Delivery" },
            { id: "ORD004", customer: "Emily Brown", items: "Margherita Pizza, Caesar Salad, Iced Tea", total: 24.97, status: "Received" },
            { id: "ORD005", customer: "David Wilson", items: "Spaghetti Carbonara, Chocolate Brownie", total: 21.98, status: "Preparing" }
        ];

        // Populate menu items table
        const menuItemsTableBody = document.getElementById('menu-items-table-body');
        menuItems.forEach(item => {
            menuItemsTableBody.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>₹${item.price.toFixed(2)}</td>
                    <td><span class="status-badge ${item.status === 'Available' ? 'status-active' : 'status-pending'}">${item.status}</span></td>
                    <td>
                        <button onclick="editMenuItem('${item.name}')" style="background: none; border: none; color: white; cursor: pointer; padding: 4px;">
                            <i data-feather="edit-2"></i>
                        </button>
                        <button onclick="deleteMenuItem('${item.name}')" style="background: none; border: none; color: white; cursor: pointer; padding: 4px;">
                            <i data-feather="trash-2"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        // Populate orders table
        const ordersTableBody = document.getElementById('orders-table-body');
        orders.forEach(order => {
            ordersTableBody.innerHTML += `
    <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.items}</td>
        <td>₹${order.total.toFixed(2)}</td>  <!-- Changed $ to ₹ -->
        <td><span class="status-badge ${order.status === 'Delivered' ? 'status-active' : 'status-pending'}">${order.status}</span></td>
        <td>
            <button onclick="updateOrderStatus('${order.id}')" style="background: none; border: none; color: white; cursor: pointer; padding: 4px;">
                <i data-feather="refresh-cw"></i>
            </button>
        </td>
    </tr>
`;

        });

        // Re-initialize Feather Icons after dynamic content
        feather.replace();

        // Menu item actions
        function editMenuItem(name) {
            alert(`Edit menu item: ${name}`);
        }

        function deleteMenuItem(name) {
            alert(`Delete menu item: ${name}`);
        }

        // Order actions
        function updateOrderStatus(id) {
            alert(`Update status for order: ${id}`);
        }