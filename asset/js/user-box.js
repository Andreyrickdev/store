function userBox () {

    const button = document.getElementById('user');
    const box = document.getElementById('user-box');

    const searchBox = document.getElementById('search-now-box');
    const shoppingBagBox = document.getElementById('shopping-bag-box');

    button.addEventListener('click', () => {
        searchBox.classList.remove('active');
        shoppingBagBox.classList.remove('active');
        box.classList.toggle('active');
    });

}

userBox();