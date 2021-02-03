const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.nav-links');
    const nav2 = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        // Toggle Nav Hamburger Slide
        nav1.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');

        // Animate Links / Delay Each Link Before Displaying  
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1.7s ease forwards ${index / 6 + 0.2}s`;
            }
        });
        //Burger X Animation
        burger.classList.toggle('toggleX');

    });

}

navSlide();