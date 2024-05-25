function hearts () {
    const heart = document.getElementsByClassName('favorite');
    return heart;
}

function whenPageLoadPutActiveOnHeart () {
    document.addEventListener('DOMContentLoaded', () => {

        const getFavoritesInLocalStorage = localStorage.getItem('favoriteProducts');

        const StringToObject = JSON.parse(getFavoritesInLocalStorage);

        for(product of StringToObject) {
            if(product == undefined) continue;

            const getProduct = document.getElementsByClassName(product)[0];
            if(!getProduct) continue;

            const getFavorite = getProduct.getElementsByClassName('favorite')[0];
            getFavorite.classList.add('active');
        }

    }) ;
}
whenPageLoadPutActiveOnHeart();

function eventOnHeart () {

    const heart = hearts();

    const getFavoriteProductsInLocalStorage = localStorage.getItem("favoriteProducts");
    const stringToObject = JSON.parse(getFavoriteProductsInLocalStorage);
    console.log(stringToObject);

    function getLastClass (element) {
        const className = element.className;
        const classes = className.split(' ');
        return classes[1];
    }

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

eventOnHeart();