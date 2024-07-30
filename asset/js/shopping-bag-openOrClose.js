function shoppingBag () {

    const buttonOpenAndClose = document.getElementById('shopping-bag');
    const buttonClose = document.getElementById('close-button');
    const box = document.getElementById('shopping-bag-box');

    buttonOpenAndClose.addEventListener('click', openOrClose);
    buttonClose.addEventListener('click', openOrClose);

    const searchBox = document.getElementById('search-now-box');
    const userBox = document.getElementById('user-box');
    const userButton = document.getElementById('user');
    
    function openOrClose () {
        let ariaExpanded = buttonOpenAndClose.getAttribute('aria-expanded') === 'true';
        buttonOpenAndClose.setAttribute('aria-expanded', !ariaExpanded);
        
        searchBox.classList.remove('active');
        userButton.setAttribute('aria-expanded', false);
        userBox.classList.remove('active');
        box.classList.toggle('active');
    }
}

shoppingBag();