document.addEventListener("DOMContentLoaded", () => {
    const websiteForm = document.getElementById("websiteForm");
    const fileForm = document.getElementById("fileForm");

    const showWebsiteForm = () => {
        websiteForm.style.display = "flex";
        fileForm.style.display = "none";
    };

    const showUploadForm = () => {
        fileForm.style.display = "flex";
        websiteForm.style.display = "none";
    };

    window.showWebsiteForm = showWebsiteForm; // Attach to global scope
    window.showUploadForm = showUploadForm; // Attach to global scope
});