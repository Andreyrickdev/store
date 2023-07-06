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

                }
            }

            function getImg () {
                const img = item.getElementsByTagName('img')[0];

                if (img) {
                    const imgSrc = img.src || img.getAttribute('src');
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

        })
    }
}

putBag();