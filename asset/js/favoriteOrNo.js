function hearts () {
    const heart = document.getElementsByClassName('favorite-box');
    return heart;
}

const favoritedProducts = [];


function whenPageLoadPutActiveOnHeart () {
    document.addEventListener('DOMContentLoaded', () => {
        
        const getFavoritesInLocalStorage = localStorage.getItem('favoriteProducts');

        const StringToObject = JSON.parse(getFavoritesInLocalStorage);

        for(product of StringToObject) {
            const getId = document.getElementById(product);
            const getFavorite = getId.getElementsByClassName('favorite')[0];
            getFavorite.classList.add('active');
        }

        const yourFavoritesInLocalStorage = localStorage.getItem("favoriteProducts");
        console.log(JSON.parse(yourFavoritesInLocalStorage));

    });
}
whenPageLoadPutActiveOnHeart();

function eventOnHeart () {

    const heart = hearts();
    const getFavoriteProductsInLocalStorage = localStorage.getItem("favoriteProducts");
    const stringToObject = JSON.parse(getFavoriteProductsInLocalStorage);

    const favoritedProducts = [];

    for(oneFavorite of stringToObject) {
        if(oneFavorite !== -1) {
            favoritedProducts.push(oneFavorite);
        } else {
            const itemForRemove = favoritedProducts.indexOf(gettingTheLastOne);
            favoritedProducts.splice(itemForRemove, 1);
            console.log();
        }
    }

    function getLastClass(element) {
        const className = element.className;
        const classes = className.split(' ');
        return classes[1];
    }

    for (let fav of heart) {
        fav.addEventListener('click', (e) => {
            fav.getElementsByTagName('li')[0].classList.toggle('active');
            const yourProduct = fav.parentNode.parentNode;
            const gettingTheLastOne = getLastClass(yourProduct);
            const itemForRemove = favoritedProducts.indexOf(gettingTheLastOne);

            if(fav.getElementsByTagName('li')[0].classList.contains('active')) {
                favoritedProducts.push(gettingTheLastOne);
                console.log(favoritedProducts);
            } else {
                favoritedProducts.splice(itemForRemove, 1);
                console.log(favoritedProducts);
            }

            const arrayToString = JSON.stringify(favoritedProducts);
            localStorage.setItem("favoriteProducts", arrayToString);
        });
    }
}

eventOnHeart();