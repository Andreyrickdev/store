function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = document.getElementById('search-now');

    const shoppingBagBox = document.getElementById('shopping-bag-box');
    const userBox = document.getElementById('user-box');


    search.addEventListener('click', () => {
        inputSearch.classList.toggle('active');
    })


}

functSearch();