function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Simulating authentication (Replace with actual API call)
    console.log("Logging in with:", email, password);
    alert("Login successful!");

    // Redirect to homepage (replace with actual navigation)
    window.location.href = "/home";
}
