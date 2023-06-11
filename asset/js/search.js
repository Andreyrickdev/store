function functSearch () {

    const search = document.getElementById('search');
    const inputSearch = document.getElementById('search-now');
    const boxs = document.getElementsByClassName('boxs');

    search.addEventListener('click', () => {
        inputSearch.classList.toggle('active');
    })


}

functSearch();