function userBox () {

    const button = document.getElementById('user');
    const box = document.getElementById('user-box');

    const searchBox = document.getElementById('search-now-box');
    const shoppingBagBox = document.getElementById('shopping-bag-box');
    const bagButton = document.getElementById('shopping-bag');
    const search = document.getElementById('search');
    
    button.addEventListener('click', () => {
        let ariaExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute("aria-expanded", !ariaExpanded);
        
        searchBox.classList.remove('active');
        bagButton.setAttribute('aria-expanded', false);
        shoppingBagBox.classList.remove('active');
        box.classList.toggle('active');
    });

}

userBox();