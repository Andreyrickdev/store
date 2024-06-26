function addOrRemoveItems () {

    function addOrRemove () {

        document.addEventListener('click', (e) => {
            
            function getTarget () {
                const buttonAddOrRemove = e.target;
                return buttonAddOrRemove;
            }
            const buttonAddOrRemove = getTarget();

            function getDadButtonsAddOrRemove () {
                const getDadDiv = buttonAddOrRemove.parentNode;
                return getDadDiv;
            }
            const getDadDiv = getDadButtonsAddOrRemove();
            
            function getNumItemsOfProduct () {
                let getNumItem = getDadDiv.querySelector('p');
                return getNumItem;
            }
            const getNumItem = getNumItemsOfProduct();
            
            function ifTargetIsButtonRemove () {
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
            }
            ifTargetIsButtonRemove();

            function ifTargetIsButtonAdd () {
                if(buttonAddOrRemove.classList.contains('button-add')) {
    
                    let num = Number(getNumItem.innerText);
    
                    if(num < 10) {
                        getNumItem.innerText = ++num;
                    }
    
                }
            }
            ifTargetIsButtonAdd();

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
            h1.innerText = `removed item`;
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

        function timerForRemove () {
            const li = h1InLi();
            console.log(li);

            function getClass () {
                const getLiClass = li.className.split(" ");
                return getLiClass[1];
            }
            const getLiClass = getClass();

            const productInStore = localStorage.getItem("productsInBag");
            const stringToObject = JSON.parse(productInStore);

            function iterateUntilFindingTheIndices () {
                return findIndexProduct = stringToObject.findIndex( (object) => object.product === getLiClass);
            }

            const indexToRemove = iterateUntilFindingTheIndices();

            if (indexToRemove !== -1) {
                stringToObject.splice(indexToRemove, 1);
            }

            const getQtdProductsInBagAndRemoveOne = localStorage.getItem("qtdProductsInBag") - 1;


            const obejctToString = JSON.stringify(stringToObject);
            localStorage.setItem("productsInBag", obejctToString);
            localStorage.setItem("qtdProductsInBag", getQtdProductsInBagAndRemoveOne);

            setTimeout(() => {
                li.remove();
            }, 1500)
        }

        timerForRemove();

    }

    addOrRemove();
}

addOrRemoveItems();