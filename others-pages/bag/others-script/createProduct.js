(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const converted = JSON.parse(productsInStore);
    console.log(converted);

    function getListOfProductUlTag () {
        
        function getArticle () {
            const getArticleById = document.getElementById('article');
            return getArticleById;
        }

        function getUl () {
            const getArticleById = getArticle();
            const ul = getArticleById.getElementsByTagName('ul')[0];
            return ul;
        }

        return getUl();
    }

    function createLi () {
        const li = document.createElement('li');
        li.classList.add('product');
        return li;
    }

    function createDiv () {
        const div = document.createElement('div');
        return div;
    }

    function createH1 () {
        const h1 = document.createElement('h1');
        return h1;
    }

    function createP () {
        const p = document.createElement('p');
        return p;
    }

    function createSpan () {
        const span = document.createElement('span');
        return span;
    }

    function createInput () {
        const input = document.createElement('input');
        return input;
    }


    function createImgDivAndInfsProductDiv () {

        for(idProduct of converted) {

            let product;
    
            function takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo () {
                if (isNaN(idProduct.product.slice(-2)) == true) {
                    product = Number(idProduct.product.slice(-1));
                    console.log(product);
                } else {
                    product = Number(idProduct.product.slice(-2));
                    console.log(product);
                }
            }
            takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo();

            function getImg () {
                function imgDiv () {
                    const div = createDiv();
                    return div;
                }
                const div = imgDiv();
        
                div.classList.add('img-product');
    
                function isHamburgerOrDessertOrSoda () {
                    if(product >= 0 && product < 4) {
                        div.classList.add('hamburger');
                        createProductInBag(div);
                    } else if (product >= 4 && product < 8) {
                        div.classList.add('dessert');
                        createProductInBag(div);
                    } else {
                        div.classList.add('soda');
                        createProductInBag(div);
                    }
                }
                isHamburgerOrDessertOrSoda();
            }
            getImg();

            function getInfs () {

                function infDiv () {
                    const div = createDiv();
    
                    function putClassOnInfDiv () {
                        div.classList.add('infs-product');
                        return div;
                    }
                    return putClassOnInfDiv();
                }

            }
            getInfs();
        }

    }
    createImgDivAndInfsProductDiv();

    function createProductInBag (imgDiv, qtd, desc) {
        const ul = getListOfProductUlTag();
        const li = createLi();
        li.appendChild(imgDiv);
        ul.appendChild(li);
    }

})();