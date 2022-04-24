/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services-modal');
const modalButtons = document.querySelectorAll('.services-button');
const modalClose = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((button, action)=>{
    button.addEventListener('click', ()=>{
        modal(action)
    });
});

modalClose.forEach((close)=>{
    close.addEventListener('click', ()=>{
        modalViews.forEach((view)=>{
            view.classList.remove('active-modal')
        });
    });
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});


/* Link active work */ 
const linkWork = document.querySelectorAll('.work-item');

function activeWork(){
    linkWork.forEach(link=>link.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(link=>link.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial-container', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 48,
        },
        // 1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        // },
    },
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== TOGGLE LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    reset: true,
});

scrollReveal.reveal(`.home-data`, { delay: 500, origin: 'top', easing: 'steps(50)' });
scrollReveal.reveal(`.home-handle`, {delay: 750, origin: 'bottom', interval: 500},);
scrollReveal.reveal(`.home-social`, {delay: 1500, origin:'left'});
scrollReveal.reveal(`.about-img`, {delay: 1000, origin: 'left'})
scrollReveal.reveal(`.about-description`, {delay: 1500, origin: 'right'})
scrollReveal.reveal(`.about-info`, { delay: 1500, origin: 'top', easing: 'ease', interval: 100})
scrollReveal.reveal(`.skill-left`, {delay: 1000, origin: 'left', easing: 'ease-in'})
scrollReveal.reveal(`.skill-right`, {delay: 1000, origin: 'right', easing:'ease-in'})
scrollReveal.reveal(`.services-container`, { delay: 1000, origin: 'right', easing: 'ease-in-out'})
scrollReveal.reveal(`.work-container`, { delay: 1000, origin: 'right', easing: 'ease-in'})
scrollReveal.reveal(`.testimonial-container`, { delay: 1000, origin: 'left', easing: 'ease-out'})
scrollReveal.reveal(`.swiper-wrapper`, { delay: 2500, origin: 'right', easing: 'ease', interval:10})
scrollReveal.reveal(`.contact-container`, { delay: 500, origin: 'bottom', easing: 'steps(10)'})

