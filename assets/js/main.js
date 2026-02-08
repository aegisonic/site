// NAVIGATION

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('nav-main');
    const toggle = document.getElementById('nav-toggle');
    console.log(toggle);

    toggle.addEventListener('click', function () {
        console.log("clicking menu");
        menu.classList.toggle('closed');
        menu.classList.toggle('open');
        toggle.classList.toggle('active')
        const isOpen = menu.classList.contains('open');
        this.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            menu.classList.add('closed');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // SMOOTH SCROLLING

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});