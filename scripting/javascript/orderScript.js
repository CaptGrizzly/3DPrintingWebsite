document.addEventListener("DOMContentLoaded", () => {
    // Get all radio buttons and their labels
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Function to update labels
    const updateLabels = () => {
        radioButtons.forEach((btn) => {
            const label = document.querySelector(`label[for="${btn.id}"]`);
            if (label) {
                label.textContent = label.textContent.replace(" (SELECTED)", "");
            }
        });

        // Find the selected radio button and update its label
        const selectedButton = document.querySelector('input[type="radio"]:checked');
        if (selectedButton) {
            const selectedLabel = document.querySelector(`label[for="${selectedButton.id}"]`);
            if (selectedLabel) {
                selectedLabel.textContent += " (SELECTED)";
            }
        }
    };

    // Initialize labels on page load
    updateLabels();

    // Add event listeners to each radio button
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", updateLabels);
    });
});