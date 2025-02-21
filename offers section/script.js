function confirmOffer(discount, offerName) {
    if (confirm(`Do you want to apply '${offerName}'?`)) {
        applyOffer(discount, offerName);
    }
}

function applyOffer(discount, offerName) {
    document.getElementById("offers-section").style.display = "none";
    document.getElementById("checkout-section").style.display = "block";
    document.getElementById("discount-applied").innerText = `Discount Applied: ₹${discount}`;
    let total = 499 - discount;
    document.getElementById("final-price").innerText = total > 0 ? total : 0;
    alert(`Offer '${offerName}' applied successfully! Proceed to checkout.`);
}

function nextStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
}

function showPaymentForm(formId) {
    document.querySelectorAll('.payment-form').forEach(el => el.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function pay(method) {
    alert(`Payment via ${method} successful! Order placed.`);
}
