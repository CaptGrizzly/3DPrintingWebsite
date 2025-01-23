// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the forms and buttons
    const websiteForm = document.getElementById("websiteForm");
    const fileForm = document.getElementById("fileForm");
    const chooseWebsiteButton = document.getElementById("chooseWebsite");
    const uploadFileButton = document.getElementById("uploadFile");
    const orderImage = document.querySelector(".OrderImageContainer img");

    // Initially hide both forms
    websiteForm.style.display = "none";
    fileForm.style.display = "none";

    // Event listener for "Choose via Website" button
    chooseWebsiteButton.addEventListener("click", () => {
        websiteForm.style.display = "block";
        fileForm.style.display = "none";
        orderImage.src = "img/WebsiteTutorial.gif"; // Replace with GIF file
        orderImage.alt = "Website Order Illustration";
    });

    // Event listener for "Upload Your Own File" button
    uploadFileButton.addEventListener("click", () => {
        fileForm.style.display = "block"; // Show file form
        websiteForm.style.display = "none"; // Hide website form
        orderImage.src = "img/UploadFilePic.jpg"; // Replace image with file-upload-specific picture
        orderImage.alt = "File Upload Illustration"; // Update alt text
    });
});
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