function putBag () {



    const items = document.getElementsByClassName('item-food');
    const bag = document.getElementById('items-in-bag');

    for( let item = 0; item < items.length; item++) {
        items[item].addEventListener('click', () => {

            function removePhraseEmpty () {

                const phrase = document.getElementById('cart-empty');
                
                if (phrase) {
                    return phrase.remove();
                }

            }

            function createPhraseEmpty () {

                const p = document.createElement('p');
                p.setAttribute("id","cart-empty");
                p.innerText = 'Your cart is empty';
                return p;
                
            }
            
            function createLi () {
                const li = document.createElement('li');
                li.classList.add(`project-${item}`);
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

            function buttonsAddOrRemove () {

                function buttonAdd () {

                    const button = document.createElement('input')
                    button.setAttribute("type", "button");
                    button.setAttribute("value","+");
                    return button;

                }

                function buttonRemove () {

                    const button = document.createElement('input')
                    button.setAttribute("type", "button");
                    button.setAttribute("value","-");
                    return button;

                }

                function mix () {

                    const div = createDiv();
                    const add = buttonAdd();
                    const paragraph = createP();
                    const remove = buttonRemove();

                    paragraph.innerText = 1;

                    add.addEventListener('click', () => {
                        if(paragraph.innerText < 10) {
                            ++paragraph.innerText;
                            return paragraph;
                        }
                    })

                    remove.addEventListener('click', () => {

                        if(paragraph.innerText >= 2 ) {
                            --paragraph.innerText;
                            return paragraph;
                        }

                        // If paragraph arrive 0, remove and put phrase empty!!
                        // ↓↓↓↓↓↓↓↓↓

                        if(paragraph.innerText <= 1 ) {
                            const product = paragraph.parentNode.parentNode.parentNode;
                            const bag = product.parentNode;

                            if(bag.childElementCount === 1) {
                                const phrase = createPhraseEmpty();
                                bag.appendChild(phrase);
                            }

                            return product.remove();

                            
                        }

                        // ↑↑↑↑↑↑↑↑↑↑

                    })

                    div.classList.add('add-or-remove-item');
                    div.appendChild(remove);
                    div.appendChild(paragraph);
                    div.appendChild(add);
                    return div;
                }

                return mix();
            }

            function getH1 () {
                const h1 = items[item].getElementsByTagName('h1')[0].textContent;
                const newH1 = createH1();
                const textNode = document.createTextNode(h1);
                newH1.appendChild(textNode);
                return newH1;
            }

            function getP () {
                const p = items[item].getElementsByTagName('p')[0].textContent;
                const newP = createP();
                const textNode = document.createTextNode(p);
                newP.appendChild(textNode);
                return newP;
            }

            function createYourOrder () {

                const li = createLi();
                const div2 = createDiv();
                const AddOrRemove = buttonsAddOrRemove();
                const h1 = getH1();
                const p = getP();

                div2.appendChild(AddOrRemove);
                div2.appendChild(h1);
                div2.appendChild(p);
                li.appendChild(div2);

                return li;
            }

            function putInBag () {

                removePhraseEmpty();
                const bag = document.getElementById('items-in-bag');
                const product = createYourOrder();
                
                bag.appendChild(product);
            }
            
            function verifyBag () {

                const bag = document.getElementById('items-in-bag');

                let listOfProducts = [];

                for (let i = 0; i <= 11; i++) {
                    listOfProducts.push(`project-${i}`);
                }
                
                const yourLiName = listOfProducts[item];

                const yourLi = bag.getElementsByClassName(yourLiName);

                const cheque = yourLi;

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

            verifyBag();

        })
    }
}

putBag();