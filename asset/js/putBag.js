function putBag () {

    const items = document.getElementsByClassName('item-food');
    const bag = document.getElementById('items-in-bag');

    for(let item of items) {
        item.addEventListener('click', () => {
            
            function createLi () {
                const li = document.createElement('li');
                return li;
            }

            function createDiv () {
                const div = document.createElement('div');
                return div;
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

                function p () {
                    const p = document.createElement('p');
                    return p;
                }

                function mix () {

                    const div = createDiv();
                    const add = buttonAdd();
                    const paragraph = p();
                    const remove = buttonRemove();

                    paragraph.innerText = 1;

                    div.classList.add('add-or-remove-item');
                    div.appendChild(remove);
                    div.appendChild(paragraph);
                    div.appendChild(add);
                    return div;
                }

                return mix;
            }

            function getImg () {
                const img = item.getElementsByTagName('img')[0];

                function createImg () {

                    const tagImg = document.createElement('img');
                    return tagImg;

                }

                if (img) {
                    const imgSrc = img.src || img.getAttribute('src');
                    const tagImg = createImg();

                    tagImg.setAttribute('src',imgSrc);

                        if(imgSrc.includes('hamburger')){
                            tagImg.setAttribute('alt','hamburger');
                        }

                        if(imgSrc.includes('dessert')){
                            tagImg.setAttribute('alt','dessert');
                        }
                        
                        if(imgSrc.includes('soda')){
                            tagImg.setAttribute('alt','soda');
                        }
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

            function createYourOrder () {

                const li = createLi();
                const div1 = createDiv();
                const div2 = createDiv();
                const img = getImg();
                const addOrRemove = buttonsAddOrRemove();
                const h1 = getH1();
                const p = getP();
            }

        })
    }
}

putBag();