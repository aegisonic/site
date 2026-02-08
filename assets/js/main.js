// NAVIGATION

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('nav-main');
    const toggle = document.getElementById('nav-toggle');
    console.log(menu);

    toggle.addEventListener('click', function () {
        console.log("clicking menu");
        const isOpen = menu.classList.contains('open');
        if (isOpen) {
            console.log("is open");
            menu.classList.remove('open');
        } else {
            console.log("is not open");
            menu.classList.add('open')
        }
        toggle.classList.toggle('active');
        this.setAttribute('aria-expanded', isOpen);
    });

    // document.addEventListener('click', function (e) {
    //     if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    //         menu.classList.remove('open');
    //         menu.classList.add('closed');
    //         toggle.classList.remove('active');
    //         toggle.setAttribute('aria-expanded', 'false');
    //     }
    // });

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