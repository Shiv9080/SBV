<script>
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.onclick = function () {
            navLinks.classList.toggle('active');
        };
    });
</script>
