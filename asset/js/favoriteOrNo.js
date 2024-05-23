function hearts () {
    const heart = document.getElementsByClassName('favorite-box');
    return heart;
}

function eventOnHeart () {

    const heart = hearts();

    const favoritedProducts = [];

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

            if(fav.getElementsByTagName('li')[0].classList.contains('active')) {
                favoritedProducts.push(gettingTheLastOne);
                console.log(favoritedProducts);
            } else {
                const itemForRemove = favoritedProducts.indexOf(gettingTheLastOne);
                if (itemForRemove !== -1) {
                    favoritedProducts.splice(itemForRemove, 1);
                }
            }

            const arrayToString = JSON.stringify(favoritedProducts);
            localStorage.setItem("favoriteProducts", arrayToString);
        });
    }
}

eventOnHeart();