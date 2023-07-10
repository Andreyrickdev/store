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

                return mix();
            }

            function getImg () {
                const img = item.getElementsByTagName('img')[0];

                function createImg () {

                    const tagImg = document.createElement('img');
                    return tagImg;

                }

                if (img) {
                    const imgSrc = img.src || img.getAttribute('src');

                    let tagImg = createImg();

                    if (imgSrc.startsWith('http://127.0.0.1:5500/')) {
                        const relativeSrc = imgSrc.replace('http://127.0.0.1:5500/', './');
                        tagImg.setAttribute('src',relativeSrc);
                    }

                        if(imgSrc.includes('hamburger')){
                            tagImg.setAttribute('alt','hamburger');
                        }

                        if(imgSrc.includes('dessert')){
                            tagImg.setAttribute('alt','dessert');
                        }
                        
                        if(imgSrc.includes('soda')){
                            tagImg.setAttribute('alt','soda');
                        }
                    
                    tagImg.setAttribute('width',100);
                    tagImg.setAttribute('height',100);
                    return tagImg;
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
                const fffd = buttonsAddOrRemove();
                const h1 = getH1();
                const p = getP();

                div1.appendChild(img);
                div2.appendChild(fffd);
                div2.appendChild(h1);
                div2.appendChild(p);
                li.appendChild(div1);
                li.appendChild(div2);

                console.log(li);
            }

            createYourOrder();

        })
    }
}

putBag();