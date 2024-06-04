function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = document.getElementById('search-now-box');

    const shoppingBagBox = document.getElementById('shopping-bag-box');
    const userBox = document.getElementById('user-box');


    search.addEventListener('click', () => {
        shoppingBagBox.classList.remove('active');
        userBox.classList.remove('active');
        inputSearch.classList.toggle('active');
    })


}

functSearch();