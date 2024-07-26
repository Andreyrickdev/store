function userBox () {

    const button = document.getElementById('user');
    const box = document.getElementById('user-box');

    const searchBox = document.getElementById('search-now-box');
    const shoppingBagBox = document.getElementById('shopping-bag-box');
    let ariaExpanded = button.getAttribute('aria-expanded');
    ariaExpanded = !ariaExpanded;

    button.addEventListener('click', () => {
        ariaExpanded === false ? ariaExpanded = true: ariaExpanded = false;
        button.setAttribute("aria-expanded", ariaExpanded);
        searchBox.classList.remove('active');
        shoppingBagBox.classList.remove('active');
        box.classList.toggle('active');
    });

}

userBox();