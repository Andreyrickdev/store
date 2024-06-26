(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const converted = JSON.parse(productsInStore);

    function allValueProducts () {

        return values = [12.99
            ,15.00
            ,13.99
            ,12.99
            ,8.99
            ,8.99
            ,12.99
            ,13.99
            ,10.99
            ,12.99
            ,11.99
            ,2.50];
    }

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

    function createImgDivAndInfsProductDivandPutClassOnLi () {

        for(idProduct of converted) {

            let product;

            function putClassOnLi () {
                const classProduct = idProduct.product;
                return classProduct;
            }
    
            function takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo () {
                if (isNaN(idProduct.product.slice(-2)) == true) {
                    product = Number(idProduct.product.slice(-1));
                    return product;
                } else {
                    product = Number(idProduct.product.slice(-2));
                    return product;
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
                    switch(product) {
                        case 0:
                            div.classList.add('hamburger0');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 1:
                            div.classList.add('hamburger1');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 2:
                            div.classList.add('hamburger2');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 3:
                            div.classList.add('hamburger3');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 4:
                            div.classList.add('dessert4');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 5:
                            div.classList.add('dessert5');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 6:
                            div.classList.add('dessert6');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 7:
                            div.classList.add('dessert7');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 8:
                            div.classList.add('soda8');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 9:
                            div.classList.add('soda9');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 10:
                            div.classList.add('soda10');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        case 11:
                            div.classList.add('soda11');
                            createProductInBag(div,getInfs(),putClassOnLi());
                            break;
                        default:
                            alert('nothing');
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
                        const yourProductIndice = takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo();
                        const listValueOfProducts = allValueProducts();
                        h1.innerText = listValueOfProducts[yourProductIndice];
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

                function allButtonsDiv () {

                    function createButtonsDiv () {
                        
                        function creatingDiv () {
                            const div = createDiv();
                            return div;
                        }

                        function putClassOnDiv (div) {
                            div.classList.add('buttons');
                            return div;
                        }

                        const div = creatingDiv();
                        const finalDiv = putClassOnDiv(div);
                        return finalDiv;
                    }

                    function createButtonsAddOrRemoveDiv () {

                        function creatingDiv () {
                            const div = createDiv();
                            return div;
                        }

                        function divWithClass (div) {
                            div.classList.add('add-or-remove-item');
                            return div;
                        }

                        function buttonRemove () {

                            function createdButtonRemove () {
                                const button = createInput();
                                return button;
                            }
                
                            function setAttrOfButton (button) {
                                button.setAttribute("type", "button");
                                button.setAttribute("value","-");
                                return button;
                            }
                
                            function setClassOnButton (button) {
                                button.classList.add('button-remove');
                                return button;
                            }
                
                            const button = createdButtonRemove();
                            const setAttr = setAttrOfButton(button);
                            const finalButton = setClassOnButton(setAttr);
                
                            return finalButton;
                
                        }

                        function buttonAdd () {

                            function createdButtonAdd () {
                                const button = createInput();
                                return button;
                            }
                
                            function setAttrOfButton (button) {
                                button.setAttribute("type", "button");
                                button.setAttribute("value","+");
                                return button;
                            }
                
                            function setClassOnButton (button) {
                                button.classList.add('button-add');
                                return button;
                            }
                
                            const button = createdButtonAdd();
                            const setAttr = setAttrOfButton(button);
                            const finalButton = setClassOnButton(setAttr);
                
                            return finalButton;
                        }

                        function numItemsOfProduct () {

                            function creatingP () {
                                const p = createP();
                                return p;
                            }

                            function putClassOnP (p) {
                                p.classList.add('num-items');
                                return p;
                            }

                            function putValueInP (p) {
                                p.innerText = idProduct.qtd;
                                return p;
                            }

                            const p = creatingP();
                            const pWithClass = putClassOnP(p);
                            const finalP = putValueInP(pWithClass);
                            return finalP;

                        }

                        const div = creatingDiv();
                        const finalDiv = divWithClass(div);
                        const add = buttonAdd();
                        const qtdOfProduct = numItemsOfProduct();
                        const remove = buttonRemove();

                        finalDiv.appendChild(remove);
                        finalDiv.appendChild(qtdOfProduct);
                        finalDiv.appendChild(add);
                        return finalDiv;

                    }

                    function favButton (){
                        
                        function creatingDiv () {
                            const div = createDiv();
                            return div;
                        }

                        function putClassOnDiv (div) {
                            div.classList.add('favorite');
                            return div;
                        }

                        const div = creatingDiv();
                        const finalDiv = putClassOnDiv(div);
                        return finalDiv;
                    }

                    const buttonsDiv = createButtonsDiv();
                    const span = createSpan();
                    const buttonsAddOrRemove = createButtonsAddOrRemoveDiv();
                    const favoriteButton = favButton();
                    buttonsDiv.appendChild(span);
                    buttonsDiv.appendChild(buttonsAddOrRemove);
                    buttonsDiv.appendChild(favoriteButton);
                    return buttonsDiv;
                }

                const box = infDivBox();
                const price = infPrice();
                const desc = infDesc();
                const buttons = allButtonsDiv();

                box.appendChild(price);
                box.appendChild(desc);
                box.appendChild(buttons);
                return box;
            }
        }

    }
    createImgDivAndInfsProductDivandPutClassOnLi();

    function createProductInBag (imgDiv, infDiv, classOfProduct) {
        const ul = getListOfProductUlTag();
        const li = createLi();
        li.classList.add(classOfProduct);
        li.appendChild(imgDiv);
        li.appendChild(infDiv);
        ul.appendChild(li);
    }

})();