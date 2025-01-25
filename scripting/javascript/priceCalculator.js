window.calculatePrice = function() {
    const filamentGrams = parseFloat(document.getElementById('filamentGrams').value);
    const shipping = document.getElementById('shipping').checked;

    // Validate inputs
    if (isNaN(filamentGrams) || filamentGrams <= 0) {
        alert('Please enter a valid number of grams.');
        return;
    }

    // Base price calculation
    let basePrice = 2.99;
    if (filamentGrams > 50) {
        basePrice += (filamentGrams - 50) * 0.05;
    }

    // Shipping adjustment
    if (shipping) {
        basePrice += 10;
    }

    // Update the total price display
    document.getElementById('calculatedPrice').innerText = `Total Price: $${basePrice.toFixed(2)}`;
};
