const modal = document.getElementById("welcomeModal");
const btn = document.querySelector(".modal-btn");
const body = document.body;

function openModal() {
    modal.style.display = "flex";
    body.classList.add("no-scroll");
}

function closeModal() {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
}

// Check if elements exist before using them
if (modal && btn) {
    // Show modal on page load
    window.addEventListener("load", openModal);

    window.addEventListener("click", closeModal);
    
    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }); 
} else {
    console.error("Modal elements not found in HTML");
}