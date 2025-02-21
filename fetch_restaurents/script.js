function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showRestaurants, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showRestaurants(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Dummy restaurant data (Normally fetched from a backend API)
    let restaurants = [
        { name: "Pizza Palace", location: "Downtown", dishes: ["Pepperoni Pizza", "Margherita", "BBQ Chicken Pizza"] },
        { name: "Sushi World", location: "Main Street", dishes: ["Salmon Sushi", "California Roll", "Tuna Sashimi"] },
        { name: "Burger Hub", location: "Near Mall", dishes: ["Cheese Burger", "Veggie Burger", "Double Patty Burger"] }
    ];

    let restaurantList = document.getElementById("restaurantList");
    restaurantList.innerHTML = "";

    restaurants.forEach((restaurant, index) => {
        let restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("restaurant");
        restaurantDiv.innerHTML = `<strong>${restaurant.name}</strong> <br> 📍 ${restaurant.location}`;
        restaurantDiv.onclick = () => showDishes(index, restaurant.dishes);
        
        let dishList = document.createElement("div");
        dishList.classList.add("dish-list");
        dishList.id = `dish-list-${index}`;
        
        restaurant.dishes.forEach(dish => {
            let dishDiv = document.createElement("div");
            dishDiv.classList.add("dish");
            dishDiv.innerText = `🍽️ ${dish}`;
            dishDiv.onclick = (event) => {
                event.stopPropagation();
                alert(`You ordered: ${dish} from ${restaurant.name}`);
            };
            dishList.appendChild(dishDiv);
        });

        restaurantList.appendChild(restaurantDiv);
        restaurantList.appendChild(dishList);
    });
}

function showDishes(index, dishes) {
    let dishList = document.getElementById(`dish-list-${index}`);
    if (dishList.style.display === "none" || dishList.style.display === "") {
        dishList.style.display = "block";
    } else {
        dishList.style.display = "none";
    }
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
