const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobile_menu = document.querySelector('.mobile-menu')
const btn_mobile_menu = document.querySelector('.btn-mobile-menu')

navEmail.addEventListener('click',toggleDesktopMenu)
btn_mobile_menu.addEventListener('click',toggleMobileMenu)

function toggleDesktopMenu () {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    console.log('click');
    mobile_menu.classList.toggle('inactive');
}

