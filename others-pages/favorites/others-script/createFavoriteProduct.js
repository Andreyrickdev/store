(function () {

    function getFavoritesInLocalStorage () {
        const favorites = localStorage.getItem('favoriteProducts');
        const stringToObject = JSON.parse(favorites);

        for (product of stringToObject) {
            createProduct(product)
        }
    }
    getFavoritesInLocalStorage();


    function createProduct (product) {

        function isHamburgerOrDessertOrSoda (div) {
            switch (product) {
                case 'product0':
                    div.classList.add('hamburger0');
                    console.log(div);
                    mix(div);
                break;
                case 'product1':
                    div.classList.add('hamburger1');
                    mix(div);
                break;
                case 'product2':
                    div.classList.add('hamburger2');
                    mix(div);
                break;
                case 'product3':
                    div.classList.add('hamburger3');
                    mix(div);
                break;
                case 'product4':
                    div.classList.add('dessert4');
                    mix(div);
                break;
                case 'product5':
                    div.classList.add('dessert5');
                    mix(div);
                break;
                case 'product6':
                    div.classList.add('dessert6');
                    mix(div);
                break;
                case 'product7':
                    div.classList.add('dessert7');
                    mix(div);
                break;
                case 'product8':
                    div.classList.add('soda8');
                    mix(div);
                break;
                case 'product9':
                    div.classList.add('soda9');
                    mix(div);
                break;
                case 'product10':
                    div.classList.add('soda10');
                    mix(div);
                break;
                case 'product11':
                    div.classList.add('soda11');
                    mix(div);
                break;
    
            }
        }

        function getUl () {
            const ul = document.getElementsByClassName('product')[0];
            return ul;
        }

        function createDiv () {
            const div = document.createElement('div');
            return div;
        }

        function createUl () {
            const ul = document.createElement('ul');
            return ul;
        }

        function createLi () {
            const li = document.createElement('li');
            return li;
        }

        function createImg () {
            const imgDiv = createDiv();
            imgDiv.classList.add('img-product');
            isHamburgerOrDessertOrSoda(imgDiv);
            return imgDiv;
        }
        createImg();

        function createFavoriteProductDiv () {
            const div = createDiv();
            div.classList.add('favorite-product');
            return div;
        }

        function createFavoriteBoxUl () {
            const ul = createUl();
            ul.classList.add('favorite-box');
            return ul;
        }

        function createFavoriteLi () {
            const li = createLi();
            li.classList.add('favorite');
            return li;
        }

        function mix (imgProduct) {
            const ul = getUl();
            const li = createLi();
            const img = imgProduct;
            const favoriteProduct = createFavoriteProductDiv();
            const favoriteBox = createFavoriteBoxUl();
            const favorite = createFavoriteLi();

            favoriteBox.appendChild(favorite);
            favoriteProduct.appendChild(favoriteBox);
            li.appendChild(img);
            li.appendChild(favoriteProduct);
            ul.appendChild(li);
            return ul;
        }


    }
    createProduct();

})();