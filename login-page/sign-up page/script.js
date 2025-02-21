function signup() {
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!fullName || !email || !password) {
        alert("⚠️ Please fill out all fields.");
        return;
    }

    console.log("Signup Details:", { fullName, email, password });

    alert("✅ Signup successful! Redirecting...");
    window.location.href = "/dashboard.html"; // Change this to your actual redirect page
}
