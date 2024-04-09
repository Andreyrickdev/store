function shoppingBag () {

    const buttonOpenAndClose = document.getElementById('shopping-bag');
    const buttonClose = document.getElementById('close-button');
    const box = document.getElementById('shopping-bag-box');

    buttonOpenAndClose.addEventListener('click', openOrClose);
    buttonClose.addEventListener('click', openOrClose);

    const searchBox = document.getElementById('search-now');
    const userBox = document.getElementById('user-box');

    function openOrClose () {
        searchBox.classList.remove('active');
        userBox.classList.remove('active');
        box.classList.toggle('active');
    }
}

shoppingBag();