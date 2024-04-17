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


    function createImgDiv () {
        for(idProduct of converted) {
            function imgDiv () {
                const div = createDiv();
                return div;
            }
            const div = imgDiv();
    
            div.classList.add('img-product');
            
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


    }
    createImgDiv();

    function createInfsProductDiv () {

        for (idProduct of converted) {

            function infDiv () {
                const div = createDiv();

                function putClassOnInfDiv () {
                    div.classList.add('infs-product');
                    return div;
                }
                putClassOnInfDiv();
            }

            function h1Inf () {
                const h1 = createH1();
                h1.innerText = 12.99;
                return h1;
            }

            function pInf () {
                const p = createP();
                p.innerText = idProduct.desc;

                function setClassOnP () {
                    p.classList.add('desc');
                    return p;
                }
                setClassOnP();
            }

            function buttonsInf () {

                function buttonsDiv () {
                    const div = createDiv();

                    function putClassOnButtonsDiv () {
                        div.classList.add('buttons');
                        return div;
                    }
                    putClassOnButtonsDiv();
                }
                
                function spanButtonsDiv () {
                    const span = createSpan();
                    return span;
                }

                function buttonsAddOrRemove () {

                    function createDivButtonsAddOrRemove () {
                        const div = createDiv();
                        div.classList.add('add-or-remove-item');
                        return div;
                    }

                    function createInputRemove () {
                        function creatingInput () {
                            const input = createInput();
                            return input;
                        }

                        function setClassOnInput () {
                            const input = creatingInput();
                            input.classList.add('button-remove');
                            return input;
                        }

                        function setAttributeOnInput () {
                            const input = setClassOnInput();
                            input.setAttribute('type','button');
                            input.setAttribute('value','-');
                            return input;
                        }

                        setAttributeOnInput();
                    }
                    
                    function createPNumOfItems () {
                        const p = createP();
                        p.innerText = idProduct.qtd;
                        return p;
                    }

                    function createInputAdd () {
                        
                    }

                }


            }
            const div = infDiv();
            const h1 = h1Inf();
            const p = pInf();
            const buttonsDiv = buttonsInf();

        }

    }
    createInfsProductDiv();


    function createProductInBag (imgDiv, ) {
        const ul = getListOfProductUlTag();
        const li = createLi();
        li.appendChild(imgDiv);
        ul.appendChild(li);
    }

})();