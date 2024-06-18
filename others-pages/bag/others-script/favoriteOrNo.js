function hearts () {
    const heart = document.getElementsByClassName('favorite');
    return heart;
}

function addActiveClassToFavorite () {
    document.addEventListener('DOMContentLoaded', () => {

        const getFavoritesInLocalStorage = localStorage.getItem('favoriteProducts');

        let stringToObject = [];
        if(getFavoritesInLocalStorage) {
            stringToObject = JSON.parse(getFavoritesInLocalStorage);
        }

        if(Array.isArray(stringToObject)) {
            for(product of stringToObject) {
                if(product == undefined) continue;
    
                const getProduct = document.getElementsByClassName(product)[0];
                if(!getProduct) continue;
    
                const getFavorite = getProduct.getElementsByClassName('favorite')[0];
                getFavorite.classList.add('active');
            }
        }

    }) ;
}
addActiveClassToFavorite();

function whenPageLoadPutActiveOnHeart () {

    document.addEventListener('DOMContentLoaded', () => {

        addActiveClassToFavorite(); 

    });

    window.addEventListener('pageshow', () => {

        addActiveClassToFavorite();
        
    });

}

function eventOnHeart () {

    const heart = hearts();

    const getFavoriteProductsInLocalStorage = localStorage.getItem("favoriteProducts");
    let stringToObject = [];
    if(getFavoriteProductsInLocalStorage) {
        stringToObject = JSON.parse(getFavoriteProductsInLocalStorage);
    }

    function getLastClass (element) {
        const className = element.className;
        const classes = className.split(' ');
        return classes[1];
    }

    if(Array.isArray(stringToObject)) {
        for (let fav of heart) {
            fav.addEventListener('click', () => {
                fav.classList.toggle('active');
                const product = fav.parentNode.parentNode.parentNode;
                const gettingTheLastOne = getLastClass(product);
                const itemForRemove = stringToObject.indexOf(gettingTheLastOne);
    
                if(fav.classList.contains('active')) {
                    stringToObject.push(gettingTheLastOne);
                    console.log(stringToObject);
                } else {
                    stringToObject.splice(itemForRemove, 1);
                    console.log(stringToObject);
                }
    
                const arrayToString = JSON.stringify(stringToObject);
                localStorage.setItem("favoriteProducts", arrayToString);
            });
        }
    }
}

eventOnHeart();