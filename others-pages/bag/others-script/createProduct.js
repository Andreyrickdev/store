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

            function fetchingProductFromStorageAccordingToItsId () {

                function createImgDiv() {
                    const div = createDiv();
                    return div;
                }

                function putClassOnDiv(div) {
                    div.classList.add('img-product');
                    return div;
                }
        
                function isHamburgerOrDessertOrSoda (div) {
                    if(product >= 0 && product < 4) {
                        div.classList.add('hamburger');
                        createProductInBag(div,getInfs());
                    } else if (product >= 4 && product < 8) {
                        div.classList.add('dessert');
                        createProductInBag(div,getInfs());
                    } else {
                        div.classList.add('soda');
                        createProductInBag(div,getInfs());
                    }
                }

                const div = createImgDiv();
                const divWithClass = putClassOnDiv(div);
                const finishProduct = isHamburgerOrDessertOrSoda(divWithClass);
                return finishProduct;
            }
            fetchingProductFromStorageAccordingToItsId();

            function getInfs () {

                function infDivBox () {

                    function createInfDiv () {
                        const div = createDiv();
                        return div;
                    }
    
                    function putClassOnDiv (div) {
                        div.classList.add('infs-product');
                        return div;
                    }

                    const div = createInfDiv();
                    const divWithClass = putClassOnDiv(div);
                    return divWithClass;

                }

                function infPrice () {
                    
                    function createH1Price () {
                        const h1 = createH1();
                        return h1;
                    }

                    function putValueInH1 (h1) {
                        h1.innerText = 12.99;
                        return h1;
                    }

                    const h1 = createH1Price();
                    const finalH1 = putValueInH1(h1);
                    return finalH1;

                }

                function infDesc () {

                    function createPInf () {
                        const p = createP();
                        return p;
                    }

                    function putClassOnDiv (p) {
                        p.classList.add('desc');
                        return p;
                    }

                    function putValueInP (p) {
                        p.innerText = idProduct.desc;
                        return p;
                    }

                    const p = createPInf();
                    const pWithClass = putClassOnDiv(p);
                    const finalP = putValueInP(pWithClass);
                    return finalP;
                }

                function buttonsAddOrRemove () {

                    function createButtonsDiv () {
                        const div = createDiv();
                        return div;
                    }

                }

                const box = infDivBox();
                const price = infPrice();
                const desc = infDesc();

                box.appendChild(price);
                box.appendChild(desc);
                return box;
            }
        }

    }
    createImgDivAndInfsProductDiv();

    function createProductInBag (imgDiv, infDiv) {
        const ul = getListOfProductUlTag();
        const li = createLi();
        li.appendChild(imgDiv);
        li.appendChild(infDiv);
        ul.appendChild(li);
    }

})();