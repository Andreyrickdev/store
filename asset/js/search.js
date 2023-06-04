function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = document.getElementById('search-now');

    search.addEventListener('click', () => {
        inputSearch.classList.toggle('active');
    })


}

functSearch();