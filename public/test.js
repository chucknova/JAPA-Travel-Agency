 // Get DOM elements
    const openBtn = document.getElementById('openOffcanvasBtn-${index}');
    const closeBtn = document.getElementById('closeOffcanvasBtn-${index}');
    const offcanvas = document.getElementById('productOffcanvas-${index}');
    const overlay = document.getElementById('overlay-${index}');

    // Function to open the offcanvas
    function openOffcanvas() {
        // Trigger the entrance animation
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            offcanvas.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    // Function to close the offcanvas
    function closeOffcanvas() {
        overlay.classList.remove('active');
        offcanvas.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Event listeners
    openBtn.addEventListener('click', openOffcanvas);
    closeBtn.addEventListener('click', closeOffcanvas);
    overlay.addEventListener('click', closeOffcanvas);

    // Add staggered entrance effect for a more delightful animation
    document.addEventListener('DOMContentLoaded', function () {
       const offcanvas = document.getElementById('productOffcanvas-${index}');
        // Add subtle animation when the page loads
        setTimeout(() => {
            offcanvas.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        }, 100);
    });


    