function putBag () {

    function createLi () {
        const li = document.createElement('li');
        return li;
    }

    function createDiv () {
        const div = document.createElement('div');
        return div;
    }

    function createP () {
        const p = document.createElement('p');
        return p;
    }

    function createH1 () {
        const h1 = document.createElement('h1');
        return h1;
    }

    function getBag () {
        const bag = document.getElementById('items-in-bag');
        return bag;
    }

    function removePhraseEmpty () {
    
        function getPhrase () {
            const phrase = document.getElementById('bag-empty');
            return phrase;
        }

        function goToShoppingBag () {
            const button = document.getElementsByClassName('button-shopping-bag')[0];
            button.classList.add('active');
            return button;
        }
        goToShoppingBag();

        const phrase = getPhrase();
        
        if (phrase) {
            return phrase.remove();
        }

    }

    function createPhraseEmpty () {

        function createdPhrase () {
            let p = createP();
            return p;
        }

        function setAttrOfP (p){
            p.setAttribute("id","bag-empty");
            return p;
        }

        function setTextOfP (p) {
            p.innerText = 'Your bag is empty';
            return p;
        }

        function goToShoppingBag () {
            const button = document.getElementsByClassName('button-shopping-bag')[0];
            button.classList.remove('active');
            return button;
        }
        goToShoppingBag();

        const p = createdPhrase();
        const pWithId = setAttrOfP(p);
        const finalP = setTextOfP(pWithId);

        return finalP;
    }

    function getAllFoodItems () {
        const items = document.getElementsByClassName('item-food');
        return items;
    }

    function buttonsAddOrRemove (qtdProducts, numOfLoop, createdProduct) {
    
        function createButton () {
            const button = document.createElement('input');
            return button;
        }

        function buttonAdd () {

            function createdButtonAdd () {
                const button = createButton();
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

        function buttonRemove () {

            function createdButtonRemove () {
                const button = createButton();
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

        function mix () {

            const div = createDiv();
            const add = buttonAdd();
            const paragraph = createP();
            const remove = buttonRemove();

            function ifCreateProductPutOldQtd () {
                if(createdProduct == true) {
                    paragraph.innerText = qtdProducts[numOfLoop];
                } else {
                    paragraph.innerText = 1;
                }
            }
            ifCreateProductPutOldQtd();

            function ifYouClickOnAddButtonOrRemoveButtonInBag () {
                document.addEventListener('click', (event) => {
    
                    function getEventOfClick () {
                        const eventAttk = event.target;
                        return eventAttk;
                    }
    
                    const eventAttk = getEventOfClick();
    
                    function ifClickedOnAddButton () {
                        if(eventAttk == add) {

                            function getYourLi () {
                                const yourLi = eventAttk.parentNode.parentNode.parentNode;
                                return yourLi;
                            }

                            function getYourLiClassName () {
                                const yourLi = getYourLi();
                                return yourLi.classList.value;
                            }
        
                            function getQtdYourLi () {
    
                                function getYourQtdLi () {
                                    let yourQtdLi = Number(paragraph.innerText) + 1;
                                    return yourQtdLi;
                                }
    
                                let yourQtdLi = getYourQtdLi();
    
                                if(yourQtdLi == 11) {
                                    yourQtdLi = 10; 
                                }
                                return yourQtdLi;
                            }

                            function getDescYourLi () {
                                const yourLi = getYourLi();
                                const desc = yourLi.getElementsByClassName('desc')[0].innerText;
                                return desc;
                            }
        
                            storeProductLocalStorage(getYourLiClassName(), getQtdYourLi(), getDescYourLi());
                            
                            function ifProductQtdLessThan10 () {
                                if(paragraph.innerText < 10) {
                                    return paragraph.innerText++;
                                }
                            }
    
                            ifProductQtdLessThan10();
                        }
    
                    }
    
                    function ifClicekdOnRemoveButton () {
                        if(eventAttk == remove) {

                            function getYourLi () {
                                const yourLi = eventAttk.parentNode.parentNode.parentNode;
                                return yourLi;
                            }
        
                            function getYourLiClassName () {
                                const yourLi = getYourLi();
                                return yourLi.classList.value;
                            }
        
                            function getQtdYourLi () {
                                return Number(paragraph.innerText - 1);
                            }

                            function getDescYourLi () {
                                const yourLi = getYourLi();
                                const desc = yourLi.getElementsByClassName('desc')[0].innerText;
                                return desc;
                            }
        
                            storeProductLocalStorage(getYourLiClassName(), getQtdYourLi(), getDescYourLi());
        
                            function ifQtdProducts () {
                                if(paragraph.innerText >= 2 ) {
                                    --paragraph.innerText;
                                    return paragraph;
                                }
            
                                if(paragraph.innerText <= 1) {
    
                                    function getProduct () {
                                        const product = paragraph.parentNode.parentNode.parentNode;
                                        return product;
                                    }
                                    const product = getProduct();
                                    const bag = getBag();
                                    
                                    function removeItemInBagVerify () {
                                        const itemsInBagRemove = bag.childElementCount - 1;
                                        const numItemsTextRemoved = setQtdItemInStore(itemsInBagRemove);
                                        return numItemsTextRemoved;
                                    }
                                    removeItemInBagVerify();
            
                                    function ifProductsInBagEqual1 () {
                                        if(bag.childElementCount === 1) {
                                            const phrase = createPhraseEmpty();
                                            bag.appendChild(phrase);
                                        }
                                    }
                                    ifProductsInBagEqual1();
            
                                return product.remove();
            
                                }
                            }
                            ifQtdProducts();

                                
                        }
    
                    }
    
                    ifClickedOnAddButton();
                    ifClicekdOnRemoveButton();
    
                })
            }
            ifYouClickOnAddButtonOrRemoveButtonInBag();


            div.classList.add('add-or-remove-item');
            div.appendChild(remove);
            div.appendChild(paragraph);
            div.appendChild(add);
            return div;
        }

        return mix();
    }

    let createdProduct;

    function setProductInStoreAndPutInBag () {
        
        const items = getAllFoodItems();
    
        function creatingYourOrderWhenYouJustClickOnProduct () {
            for( let item = 0; item < items.length; item++) {
                items[item].addEventListener('click', () => {
                    createdProduct = false;
    
                    function setClassOnLi () {
        
                        function setClass (li) {
                            li.classList.add(`product${item}`);
                            return li;
                        }
                        
                        const li = createLi();
                        const finalLi = setClass(li);
        
                        return finalLi;
                    }
    
                    function getH1 () {
        
                        function getedH1 () {
                            const h1 = items[item].getElementsByTagName('h1')[0].textContent;
                            return h1;
                        }
        
                        function createdNewH1 () {
                            const newH1 = createH1();
                            return newH1
                        }
        
                        function createdTextNode (h1) {
                            const textNode = document.createTextNode(h1);
                            return textNode;
                        }
        
                        function textNodeInNewH1 (textNode) {
                            newH1.appendChild(textNode);
                            return newH1;
                        }
        
                        const h1 = getedH1();
                        const newH1 = createdNewH1();
                        const textNode = createdTextNode(h1);
                        const finalH1 = textNodeInNewH1(textNode);
        
                        return finalH1;
        
                    }
        
                    function getP () {
        
                        function getedP () {
                            const p = items[item].getElementsByTagName('p')[0].textContent;
                            return p;
                        }
        
                        function createdNewP () {
                            const newP = createP();
                            newP.classList.add('desc');
                            return newP;
                        }

                        function createdTextNode (p) {
                            const textNode = document.createTextNode(p);
                            return textNode;
                        }
        
                        function textNodeInNewP (textNode) {
                            newP.appendChild(textNode);
                            return newP;
                        }
        
                        const p = getedP();
                        const newP = createdNewP();
                        const textNode = createdTextNode(p);
                        const finalP = textNodeInNewP(textNode);
        
                        return finalP;
                    }
    
                    function createYourOrder () {
        
                        const li = setClassOnLi();
                        const div = createDiv();
                        const AddOrRemove = buttonsAddOrRemove(null, null, createdProduct);
                        const h1 = getH1();
                        const p = getP();
        
                        div.appendChild(AddOrRemove);
                        div.appendChild(h1);
                        div.appendChild(p);
                        li.appendChild(div);
    
                        return li;
                    }
        
                    function putInBag () {
        
                        removePhraseEmpty();
        
                        function yourOrder () {
                            const product = createYourOrder();
                            return product;
                        }
                        
                        const bag = getBag();
                        const product = yourOrder();
        
                        bag.appendChild(product);
                    }
                    
                    function verifyBag () {
        
                        function gettingBag () {
                            const bag = getBag();
                            return bag;
                        }
        
                        function createdListOfProducts () {
                            let listOfProducts = [];
                            return listOfProducts;
                        }
        
                        function pushProjectsInListOfProducts (listOfProducts) {
                            for (let i = 0; i <= 11; i++) {
                                listOfProducts.push(`product${i}`);
                            }
        
                            return listOfProducts;
                        }
        
                        function getLiOfListOfProducts (listOfProducts) {
                            const yourLiName = listOfProducts[item];
                            return yourLiName;
                        }
                        
                        function getLi (bag,yourLiName) {
                            const yourLi = bag.getElementsByClassName(yourLiName);
                            return yourLi;
                        }
        
                        function createdCheque (yourLi) {
                            const cheque = yourLi;
                            return cheque;
                        }
        
                        function setItemInBag (cheque) {

                            if(cheque.length === 0) {
                                putInBag();
                            }else{
                                let yourP = cheque[0].getElementsByTagName('p')[0];
                                let numP = Number(yourP.textContent);
                                if(numP < 10) {
                                    yourP.textContent = ++numP;
                                }
                            }
    
                            storeProductLocalStorage(cheque[0].classList.value, Number(cheque[0].getElementsByTagName('p')[0].innerText),cheque[0].getElementsByClassName('desc')[0].innerText);
    
                        }
        
                        const bag = gettingBag();
                        let listOfProducts = createdListOfProducts();
                        const liInList = pushProjectsInListOfProducts(listOfProducts);
                        const getLiInList = getLiOfListOfProducts(liInList);
                        const gettingLi = getLi(bag, getLiInList);
                        const creatingCheque = createdCheque(gettingLi);
                        const finishVerify = setItemInBag(creatingCheque);
        
                        return finishVerify;
                    }
        
                    verifyBag();
                    setQtdItemInStore();
        
                })
            }

        }
        creatingYourOrderWhenYouJustClickOnProduct();
    }
    setProductInStoreAndPutInBag();
    
    function getProductInStoreAndPutInBag () {

        function getProductsInLocalStorage () {
            const getProducts = localStorage.getItem("productsInBag");
            return getProducts;
        }
        const getProducts = getProductsInLocalStorage();

        function convertStringToArray () {
            const convertToArray = JSON.parse(getProducts);
            return convertToArray;
        }
        const convertToArray = convertStringToArray();

        const allClassNameProducts = [];
        const allQtdProducts = [];

        function putAllValuesInArray () {
            for(proj of convertToArray) {
                allClassNameProducts.push(proj.product)
                allQtdProducts.push(proj.qtd)
            }   
        }
        putAllValuesInArray();

        function setClassOnLi () {

            const allLiInArray = [];

            function gettingEachClass () {
                for (oneClass of allClassNameProducts) {
    
                    function setClass (li) {
                        li.classList.add(oneClass);
                        allLiInArray.push(li);
                        return li;
                    }
    
                    const li = createLi();
                    setClass(li);
    
                }
            }
            gettingEachClass();

            return allLiInArray;

        }
        setClassOnLi();

        function createButtonsAddOrRemove (numOfLoop) {
            let createdProduct = true;
            const addOrRemove = buttonsAddOrRemove(allQtdProducts, numOfLoop, createdProduct);
            return addOrRemove;

        }

        function getH1 () {

            const items = getAllFoodItems();
            const allH1InArray = [];

            for (oneClassName of allClassNameProducts) {

                for (itemNameId of items) {

                    if (itemNameId.id == oneClassName) {
                        const item = document.getElementById(itemNameId.id);
                        const h1 = item.getElementsByTagName('h1')[0].innerText;
                        allH1InArray.push(h1);
                    }

                }

            }

            return allH1InArray;

        }

        function getP () {

            const items = getAllFoodItems();
            const allPInArray = [];

            for(oneClassName of allClassNameProducts) {

                for (itemNameId of items) {

                    if (itemNameId.id == oneClassName) {
                        const item = document.getElementById(itemNameId.id);
                        const p = item.getElementsByTagName('p')[0].innerText;
                        allPInArray.push(p);
                    }

                }


            }

            return allPInArray;

        }
        getP();
        getH1();

        function mixAllFunctions () {

            const lisInStore = setClassOnLi();
            const h1sInStore = getH1();
            const psInStore = getP();
            const bag = getBag();


            for (let item = 0; item < h1sInStore.length; item++) {
                const li = lisInStore[item];
                const div = createDiv();
                const h1 = createH1();
                const p = createP();
                const addOrRemove = createButtonsAddOrRemove(item);
                


                h1.innerText = h1sInStore[item];
                p.innerText = psInStore[item];
                p.classList.add('desc');
                div.appendChild(addOrRemove);
                div.appendChild(h1);
                div.appendChild(p);
                li.appendChild(div);


                removePhraseEmpty();
                bag.appendChild(li);

            }

        }
        mixAllFunctions();

        getQtdItemInStore();

    }
    getProductInStoreAndPutInBag();
}

function whenPageLoadPutValueOnBallon () {
    document.addEventListener('DOMContentLoaded', () => {
        getQtdItemInStore();
    });
}
whenPageLoadPutValueOnBallon();

function getNumItemsBagUpperBallon () {

    const numItemsBagUpper = document.getElementById('num-items-in-your-bag');
    return numItemsBagUpper;

}

function getQtdItemInStore () {

    function gettingNumItemsBagUpper () {
        const numItemsBagUpper = getNumItemsBagUpperBallon();
        return numItemsBagUpper;
    }

    function getQtdItemInStoreAndPutClass () {

        function getQtdItemsInLocalStorage () {
            const getQtdItems = localStorage.getItem("qtdProductsInBag");
            return getQtdItems;
        }
        const getQtdItems = getQtdItemsInLocalStorage();

        function putNumBagUpperLoad (numItemsBagUpper) {
            if(getQtdItems != 0) {
                numItemsBagUpper.classList.add('active');
                numItemsBagUpper.innerText = getQtdItems;
            } else {
                numItemsBagUpper.classList.remove('active');
            }
        }

        const numItemsBagUpper = gettingNumItemsBagUpper();
        const putNumInBagUpper = putNumBagUpperLoad(numItemsBagUpper);
        return putNumInBagUpper;

    }

    getQtdItemInStoreAndPutClass();

}

function setQtdItemInStore (qtdItemRemovedInBag) {

    function gettingBag () {
        const bag = document.getElementById('items-in-bag');
        return bag;
    }

    function gettingNumItemsBagUpper () {
        const numItemsBagUpper = getNumItemsBagUpperBallon();
        return numItemsBagUpper;
    }

    function gettingItemInBag (bag) {
        const qtdItemInBag = bag.childElementCount;
        return qtdItemInBag;
    }

    function putNumBagUpperSave (numItemsBagUpper, qtdItemInBag) {
        if(qtdItemInBag >= 1 && !qtdItemRemovedInBag) {
            numItemsBagUpper.classList.add('active');
            numItemsBagUpper.innerText = qtdItemInBag;
        }

        if(qtdItemRemovedInBag >= 1) {
            numItemsBagUpper.innerText = qtdItemRemovedInBag;
            qtdItemInBag = qtdItemRemovedInBag;
        }

        if(qtdItemRemovedInBag == 0) {
            numItemsBagUpper.innerText = 0;
            numItemsBagUpper.classList.remove('active');
            qtdItemInBag = qtdItemRemovedInBag;
        }

        const numOfItemsInBagStored = localStorage.setItem("qtdProductsInBag", qtdItemInBag);
        return numOfItemsInBagStored;
    }

    const bag = gettingBag();
    const numItemsBagUpper = gettingNumItemsBagUpper();
    const qtdItemInBag = gettingItemInBag(bag);
    const bagUpper = putNumBagUpperSave(numItemsBagUpper, qtdItemInBag);
    return bagUpper;

}

let productInStore = [];

function loadProductsFromStoreLocalStorage () {
    const storedProducts = localStorage.getItem("productsInBag");

    function convertToArray () {
        if(storedProducts) {
            productInStore = JSON.parse(storedProducts);
        }
    }
    convertToArray();
}

loadProductsFromStoreLocalStorage();

function storeProductLocalStorage (item, qtdItem, desc) {

    let objectToProduct = {
        product: item,
        qtd: qtdItem,
        desc: desc,
    }

    function findIndexProductIfFoundReplaceWithTheExistingValue() {

        function iterateUntilFindingTheIndices () {
            const findIndexProduct = productInStore.findIndex( (object) => {
                return object.product === objectToProduct.product;
            })
            return findIndexProduct;
        }
        const findIndexProduct = iterateUntilFindingTheIndices();
        
        function ifFoundDoItIfNotPush () {
            if(findIndexProduct !== -1) {
                productInStore[findIndexProduct] = objectToProduct;
            } else {
                productInStore.push(objectToProduct);
            }
        }
        ifFoundDoItIfNotPush();
    
        function ifProductRemoveInLocalStorage () {

            if(objectToProduct.qtd === 0) {
                
                let indexToRemove = productInStore.indexOf(objectToProduct);
        
                if(indexToRemove !== -1) {
                    productInStore.splice(indexToRemove, 1);
                }
            }

        }
        ifProductRemoveInLocalStorage();
    }
    findIndexProductIfFoundReplaceWithTheExistingValue();

    function transferArrayToStringWithJson () {
        const transferArrayToString = JSON.stringify(productInStore);
        return transferArrayToString;
    }
    const transferArrayToString = transferArrayToStringWithJson();
    
    function setItemInLocalStorage () {
        localStorage.setItem("productsInBag", transferArrayToString);
    }
    setItemInLocalStorage();
}

function noFavorite () {
    
    function getAllHearts () {
        const noFavorite = document.getElementsByClassName('favorite-box');
        return noFavorite;
    }
    
    function ifClickOnHeartDontActiveBag (noFavorite) {
        for(let fav = 0; fav < noFavorite.length; fav++) {
            noFavorite[fav].addEventListener('click', (e) => {
                e.stopPropagation();
            }) 
        }
    }

    const noFavorite = getAllHearts();
    const stopPropagationOfHeart = ifClickOnHeartDontActiveBag(noFavorite);

    putBag();

    return stopPropagationOfHeart;
    

}

noFavorite();