const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobile_menu = document.querySelector('.mobile-menu')
const btn_mobile_menu = document.querySelector('.btn-mobile-menu')
const btn_shopping_cart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')



navEmail.addEventListener('click',toggleDesktopMenu);
btn_mobile_menu.addEventListener('click',toggleMobileMenu);
btn_shopping_cart.addEventListener('click',toggleAside);

function toggleDesktopMenu () {
    console.log('click');

    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    console.log('click');
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobile_menu.classList.toggle('inactive');
}

function toggleAside() {
    console.log('click');

    const isMobileMenuClosed = mobile_menu.classList.contains('inactive');


        if (!isMobileMenuClosed){
            mobile_menu.classList.add('inactive')
        }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
        aside.classList.toggle('inactive');
}

