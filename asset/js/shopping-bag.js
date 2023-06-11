function shoppingBag () {

    const buttonOpenAndClose = document.getElementById('shopping-bag');
    const buttonClose = document.getElementById('close-button');
    const box = document.getElementById('shopping-bag-box');

    buttonOpenAndClose.addEventListener('click', openOrClose);

    function openOrClose () {
        box.classList.toggle('active');
    }
}

shoppingBag();