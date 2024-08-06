function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = document.getElementById('search-now-box');

    const shoppingBagBox = document.getElementById('shopping-bag-box');
    const userBox = document.getElementById('user-box');

    const userButton = document.getElementById('user');
    const bagButton = document.getElementById('shopping-bag');

    search.addEventListener('click', () => {
        let ariaExpanded = search.getAttribute('aria-expanded') === 'true';
        search.setAttribute('aria-expanded', !ariaExpanded);

        userButton.setAttribute('aria-expanded', false);
        bagButton.setAttribute('aria-expanded', false);

        shoppingBagBox.classList.remove('active');
        userBox.classList.remove('active');
        inputSearch.classList.toggle('active');
    })


}

functSearch();