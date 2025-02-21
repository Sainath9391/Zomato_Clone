document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert("⚠️ Please select a star rating before submitting!");
        return;
    }

    document.getElementById("ratingDisplay").innerHTML = `Your rating: ${rating.value}⭐`;
    document.getElementById("popupBox").style.display = "block";
    document.getElementById("contactForm").reset();
});

function closePopup() {
    document.getElementById("popupBox").style.display = "none";
}
