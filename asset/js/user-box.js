function userBox () {

    const button = document.getElementById('user');
    const box = document.getElementById('user-box');

    const searchBox = document.getElementById('search-now');
    const shoppingBagBox = document.getElementById('shopping-bag-box');

    button.addEventListener('click', () => {
        box.classList.toggle('active');
    });

}

userBox();