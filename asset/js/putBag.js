function putBag () {

    const items = document.getElementsByClassName('item-food');
    const bag = document.getElementById('items-in-bag');

    for(let item of items) {
        item.addEventListener('click', () => {
            
            function createLi () {
                const li = document.createElement('li');
                return li;
            }

            function getImg () {
                const img = item.getElementsByTagName('img')[0];

                if (img) {
                    const imgSrc = img.src || img.getAttribute('src');
                    return imgSrc;
                }
            }

            function getH1 () {
                const h1 = item.getElementsByTagName('h1')[0].textContent;
                return h1;
            }

            function getP () {
                const p = item.getElementsByTagName('p')[0].textContent;
                return p;
            }

        })
    }
}

putBag();