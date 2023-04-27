const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const btn_mobile_menu = document.querySelector('.btn-mobile-menu');
const btn_shopping_cart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');




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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Roller Skates',
    price: 80,
    image:'https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Gloves',
    price: 20,
    image:'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Ball',
    price: 70,
    image:'https://images.pexels.com/photos/2471259/pexels-photo-2471259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

{/* <div class="product-card">
<img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> */}

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
            const productImg = document.createElement('img');
            productImg.setAttribute('src',product.image);
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
                const productInfoDiv = document.createElement('div');
        
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
        productInfoDiv.append(productPrice,productName);
    
                const productInfoFigure = document.createElement('figure');
                    const productInfoFigureImgCart = document.createElement('img');
                    productInfoFigureImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productInfoFigureImgCart)
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardContainer.append(productCard);
    
    }
}

renderProducts(productList);