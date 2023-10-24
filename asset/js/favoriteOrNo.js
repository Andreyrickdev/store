function hearts () {
    const heart = document.getElementsByClassName('favorite');
    return heart;
}

function eventOnHeart () {

    const heart = hearts();

    for (let fav of heart) {
        fav.addEventListener('click', () => {
            
        });
    }
}

eventOnHeart();