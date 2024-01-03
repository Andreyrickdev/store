function putBag () {



    const items = document.getElementsByClassName('item-food');

    for( let item = 0; item < items.length; item++) {
        items[item].addEventListener('click', () => {

            function removePhraseEmpty () {

                function getPhrase () {
                    const phrase = document.getElementById('bag-empty');
                    return phrase;
                }

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

                const p = createdPhrase();
                const pWithId = setAttrOfP(p);
                const finalP = setTextOfP(pWithId);

                return finalP;
            }
            
            function createLi () {

                function createdLi () {
                    const li = document.createElement('li');
                    return li;
                }

                function setClassOnLi (li) {
                    li.classList.add(`project-${item}`);
                    return li;
                }
                
                const li = createdLi();
                const finalLi = setClassOnLi(li);

                return finalLi;
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

            function buttonsAddOrRemove () {

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

                    paragraph.innerText = 1;

                    document.addEventListener('click', (event) => {
                        const eventAttk = event.target;

                        if(eventAttk == add) {
                            if(paragraph.innerText < 10) {
                                ++paragraph.innerText;
                                return paragraph;
                            }
                        }

                        if(eventAttk == remove) {
                            if(paragraph.innerText >= 2 ) {
                                --paragraph.innerText;
                                return paragraph;
                            }

                            if(paragraph.innerText <= 1 ) {
                                const product = paragraph.parentNode.parentNode.parentNode;
                                const bag = getBag();
                                function removeItemInBagVerify () {
                                    const itemsInBagRemove = bag.childElementCount - 1;
                                    const numItemsTextRemoved = verifyNumItems(itemsInBagRemove);
                                    // console.log(itemsInBagRemove);

                                    return numItemsTextRemoved;
                                }

                                removeItemInBagVerify();

                                if(bag.childElementCount === 1) {
                                    const phrase = createPhraseEmpty();
                                    bag.appendChild(phrase);
                                }

                            return product.remove();

                            }
                        }
                    })

                    div.classList.add('add-or-remove-item');
                    div.appendChild(remove);
                    div.appendChild(paragraph);
                    div.appendChild(add);
                    return div;
                }

                return mix();
            }

            
            // Creating your order...

            function getBag () {
                const bag = document.getElementById('items-in-bag');
                return bag;
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

                const li = createLi();
                const div = createDiv();
                const AddOrRemove = buttonsAddOrRemove();
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

                function getBag () {
                    const bag = document.getElementById('items-in-bag');
                    return bag;
                }

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
                        listOfProducts.push(`project-${i}`);
                    }

                    return listOfProducts;
                }

                function getLiOfListOfProducts (listOfProducts) {
                    const yourLiName = listOfProducts[item];
                    return yourLiName
                }
                
                function getLi (bag,yourLiName) {
                    const yourLi = bag.getElementsByClassName(yourLiName);
                    return yourLi;
                }

                function createdCheque (yourLi) {
                    const cheque = yourLi;
                    return cheque
                }

                function verifyItemInBag (cheque, yourLi) {

                    if(cheque.length === 0) {
                        putInBag();
                    }else{
                        let yourP = yourLi[0].getElementsByTagName('p')[0];
                        let numP = Number(yourP.textContent);
                        if(numP < 10) {
                            yourP.textContent = ++numP;
                        }
                    }

                }

                const bag = gettingBag();
                let listOfProducts = createdListOfProducts();
                const liInList = pushProjectsInListOfProducts(listOfProducts);
                const getLiInList = getLiOfListOfProducts(liInList);
                const gettingLi = getLi(bag, getLiInList);
                const creatingCheque = createdCheque(gettingLi);
                const finishVerify = verifyItemInBag(creatingCheque, gettingLi);

                return finishVerify;
            }

            function verifyNumItems (itemsInBagRemove) {

                function gettingBag() {
                    const bag = getBag();
                    return bag;
                }

                function gettingNumItemsBagUpper () {
                    let numItemsBagUpper = document.getElementById('num-items-in-your-bag');
                    return numItemsBagUpper;
                }

                function gettingItemInBag (bag) {
                    const itemInBag = bag.childElementCount;
                    return itemInBag;
                }

                function putNumBagUpper (numItemsBagUpper, itemInBag) {
                    if(itemInBag >= 1 && !itemsInBagRemove) {
                        numItemsBagUpper.classList.add('active');
                        numItemsBagUpper.innerText = itemInBag;
                    } 

                    if(itemsInBagRemove >= 1) {
                        numItemsBagUpper.innerText = itemsInBagRemove;
                    }

                    if(itemsInBagRemove == 0) {
                        numItemsBagUpper.innerText = 0;
                        numItemsBagUpper.classList.remove('active');
                    }
                }

                const bag = gettingBag();
                const numItems = gettingNumItemsBagUpper();
                const itemInBag = gettingItemInBag(bag);
                const bagUpper = putNumBagUpper(numItems, itemInBag);

                return bagUpper; 
            }

            verifyBag();
            verifyNumItems();

        })
    }
}

function noFavorite () {
    
    function getAllHearts () {
        const noFavorite = document.getElementsByClassName('favorite');
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