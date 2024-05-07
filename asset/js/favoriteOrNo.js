function hearts () {
    const heart = document.getElementsByClassName('favorite-box');
    return heart;
}

function eventOnHeart () {

    const heart = hearts();

    for (let fav of heart) {
        fav.addEventListener('click', (e) => {
            fav.getElementsByTagName('li')[0].classList.toggle('active');
        });
    }
}

eventOnHeart();