// show menu

const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close')

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show__menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show__menu')
        })
    }



const typedHome = new Typed('#home-typed', {
    strings: ['Web Developer','Freelancer','Designer'],
    typeSpeed:80,
    backSpeed:40,
    backDelay:2000,
    loop:true,
    cursorChar:'_',
})

/*==================== ADD SHADOW HEADER ====================*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow__header')
                       : header.classList.remove('shadow__header')
}
window.addEventListener('scroll', shadowHeader)


