function addOrRemoveItems () {

    function addOrRemove () {

        document.addEventListener('click', (e) => {
            
            const buttonAddOrRemove = e.target; 
            const getDadDiv = buttonAddOrRemove.parentNode;
            let getNumItem = getDadDiv.querySelector('p');
            
            if(buttonAddOrRemove.classList.contains('button-remove')) {

                let num = Number(getNumItem.innerText);

                if(num >= 1) {
                    getNumItem.innerText = --num;
                }

                if(num == 0) {
                    const dadOfAll = getDadDiv.parentNode.parentNode.parentNode;
                    ifRemove(dadOfAll);
                }

            }

            if(buttonAddOrRemove.classList.contains('button-add')) {

                let num = Number(getNumItem.innerText);

                if(num < 10) {
                    getNumItem.innerText = ++num;
                }

            }

        })

    }

    function ifRemove (li) {

        function createDiv () {
            const div = document.createElement('div');
            return div;
        }

        function createH1 () {
            const h1 = document.createElement('h1');
            return h1;
        }

        function setValueH1 () {
            let h1 = createH1();
            h1.innerText = `removed item`
            return h1;
        }

        function h1InDiv () {
            const div = createDiv();
            const h1 = setValueH1();
            div.appendChild(h1);
            return div;
        }

        function resetValueInLi () {
            li.innerText = '';
            return li;
        }

        function addClassOnLi () {
            const li = resetValueInLi();
            li.classList.add('removed');
            return li;
        }

        function h1InLi () {
            const li = addClassOnLi();
            const div = h1InDiv();
            li.appendChild(div);
            return li;
        }

    }

    addOrRemove();
}

addOrRemoveItems();