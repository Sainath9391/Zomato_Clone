document.getElementById("qrForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let restaurant = document.getElementById("restaurantName").value.trim();
    let location = document.getElementById("location").value.trim();

    if (restaurant && location) {
        try {
            // Send data to the backend
            let response = await axios.post("http://localhost:5000/add-restaurant", {
                name: restaurant,
                location: location
            });

            let menuUrl = "http://localhost:5000" + response.data.menuUrl;

            // Show the QR code container
            document.getElementById("qrContainer").style.display = "block";

            // Generate QR Code
            document.getElementById("qrcode").innerHTML = ""; // Clear previous QR
            new QRCode(document.getElementById("qrcode"), {
                text: menuUrl,
                width: 200,
                height: 200
            });

        } catch (error) {
            alert("Error creating QR code.");
        }
    } else {
        alert("⚠️ Please fill out both fields.");
    }
});
