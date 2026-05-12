document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger');
    var nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            nav.classList.toggle('mobile-open');
            // Prevent body scroll when menu is open
            document.body.style.overflow = nav.classList.contains('mobile-open') ? 'hidden' : '';
        });

        // Close menu on link click
        var navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                nav.classList.remove('mobile-open');
                document.body.style.overflow = '';
            });
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (burger && nav && nav.classList.contains('mobile-open')) {
                burger.classList.remove('active');
                nav.classList.remove('mobile-open');
                document.body.style.overflow = '';
            }
        }
    });
});
