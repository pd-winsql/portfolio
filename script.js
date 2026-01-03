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

// Set footer year without using document.write
(function setFooterYear(){
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Initialize stats (moved from inline HTML). Safe-guard if Stats isn't loaded.
(function initStats(){
    try {
        if (typeof Stats === 'undefined') return;
        var count_particles, stats, update;
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() {
            stats.begin();
            stats.end();
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                if (count_particles) count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    } catch (e) {
        console.warn('Stats initialization failed', e);
    }
})();