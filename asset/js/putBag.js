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
                        ++paragraph.innerText;
                        return paragraph;
                    })

                    remove.addEventListener('click', () => {

                        if(paragraph.innerText >= 2 ) {
                            --paragraph.innerText;
                            return paragraph;
                        }

                        if(paragraph.innerText <= 1 ) {
                            const product = paragraph.parentNode.parentNode.parentNode;
                            const bag = product.parentNode;
                            console.log(bag.childElementCount);

                            if(bag.childElementCount === 1) {
                                const phrase = createPhraseEmpty();
                                bag.appendChild(phrase);
                            }
                            
                            return product.remove();

                            
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

            // function getImg () {
            //     const img = item.getElementsByTagName('img')[0];

            //     function createImg () {

            //         const tagImg = document.createElement('img');
            //         return tagImg;

            //     }

            //     if (img) {
            //         const imgSrc = img.src || img.getAttribute('src');

            //         let tagImg = createImg();

            //         if (imgSrc.startsWith('http://127.0.0.1:5500/')) {
            //             const relativeSrc = imgSrc.replace('http://127.0.0.1:5500/', '')//removed ./
            //             tagImg.setAttribute('src',relativeSrc);
            //         }

            //             if(imgSrc.includes('hamburger')){
            //                 tagImg.setAttribute('alt','hamburger');
            //             }

            //             if(imgSrc.includes('dessert')){
            //                 tagImg.setAttribute('alt','dessert');
            //             }
                        
            //             if(imgSrc.includes('soda')){
            //                 tagImg.setAttribute('alt','soda');
            //             }
                    
            //         tagImg.setAttribute('width',100);
            //         tagImg.setAttribute('height',100);
            //         return tagImg;
            //     }
            // }

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
                const div1 = createDiv();
                const div2 = createDiv();
                // const img = getImg();
                const fffd = buttonsAddOrRemove();
                const h1 = getH1();
                const p = getP();

                // div1.appendChild(img);
                div2.appendChild(fffd);
                div2.appendChild(h1);
                div2.appendChild(p);
                li.appendChild(div1);
                li.appendChild(div2);

                return li;
                // console.log(li); just see
            }

            function putInBag () {

                removePhraseEmpty();
                const bag = document.getElementById('items-in-bag');
                const product = createYourOrder();

                bag.appendChild(product);

                const addOrRemove = buttonsAddOrRemove();
                const numOfProducts = addOrRemove.getElementsByTagName('p')[0];
                console.log(numOfProducts);
                // Vou começar por aqui, realizando minha remoção do item caso ocorra o click no botão e fique abaixo de 0.
            }

            function removeInBag () {
                const product = createYourOrder();
                return product.remove();
            }

            putInBag();

        })
    }
}

putBag();