function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = docment.getElementById('search-now');

    search.addEventListener('click', () => {
        inputSearch.classList.toggle('active');
    })


}

functSearch();