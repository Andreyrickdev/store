function addPrice () {

    function gettingTotalValue () {

        function getFooter () {
            const button = document.getElementById('footer');
            return button;
        }

        function getNumPrices (button) {
            const numPrice = button.getElementsByClassName('num-prices')[0];
            return numPrice;
        }

        const footerButton = getFooter();
        const numPrice = getNumPrices(footerButton);
        return numPrice;
        
    }
    const numPrice = gettingTotalValue();


    function setValuePrice () {

        function selectItems () {
            const items = document.getElementsByClassName('product');
            return items;
        }

        let sumAllMultiplications = [];
        let sum;

        function readAllItems () {

            const items = selectItems();

            function retrievingEachValueAndMultiplyingItByTheQuantityOfItems () {
                for(let item of items) {
                    try {
                        function selectAllValuesOfTheProduct () {
                            const allH1 = item.querySelector('h1').innerText;
                            return allH1;
                        }
                        const allH1 = selectAllValuesOfTheProduct();

                        function selectAllQtdOfTheProduct () {
                            const allNumItems = item.querySelector('.num-items').innerText;
                            return allNumItems;
                        }
                        const allNumItems = selectAllQtdOfTheProduct();

                        function multiplyingTheValueByTheQuantity () {
                            const resultMultiplications = allH1 * allNumItems;
                            return resultMultiplications;
                        }
                        const resultMultiplications = multiplyingTheValueByTheQuantity();
        
                        function pushResultMultiplicationsInSumAllMultiplications () {
                            sumAllMultiplications.push(resultMultiplications);
                            return sumAllMultiplications;
                        }
                        pushResultMultiplicationsInSumAllMultiplications();
        
                        function traverseAndSumTheMultiplications () {
                            sum = sumAllMultiplications.reduce((total, valor) => total + valor, 0);
                            return sum;
                        }
                        traverseAndSumTheMultiplications();
                    } catch {}
    
                }
            }
            retrievingEachValueAndMultiplyingItByTheQuantityOfItems();
            
            function roundTheValueIfNotZero () {
                try {
                    numPrice.innerText = sum.toFixed(2);
                } catch {
                    numPrice.innerText = '00.00';
                }
            }
            roundTheValueIfNotZero();

        }

        readAllItems();

    }

    function whenPageLoadsSetValuePrice () {
        document.addEventListener('DOMContentLoaded', () => {
    
            setValuePrice();
    
        });
    }
    whenPageLoadsSetValuePrice();

    function setNewQtdWhenClick (event) {
        
        function getAddOrRemoveItemDiv () {
            const addOrRemoveDiv = event.parentNode;
            return addOrRemoveDiv;
        }

        function getProduct () {
            const product = event.parentNode.parentNode.parentNode.parentNode;
            try {
                const splitClass = product.className.split(" ");
                return splitClass[1];
            } catch {}
        }

        function getNewQtdItem (addOrRemoveDiv) {
            const qtdItem = addOrRemoveDiv.getElementsByClassName('num-items')[0].innerText;
            const product = getProduct();

            const productInStore = localStorage.getItem("productsInBag");
            const convert = JSON.parse(productInStore);

            function iterateUntilFindingTheIndices () {
                const findIndexProduct = convert.findIndex( (object) => {
                    if(object.product === product) {
                        object.qtd = Number(qtdItem);
                        const convert2 = JSON.stringify(convert);
                        localStorage.setItem("productsInBag", convert2);
                    }
                })
                return findIndexProduct;
            }
            iterateUntilFindingTheIndices();
        }

        const addOrRemoveDiv = getAddOrRemoveItemDiv();
        const newQtdItem = getNewQtdItem(addOrRemoveDiv);
        return newQtdItem;

    }

    function ifYourTargetIsAddOrRemoveButton () {
        document.addEventListener('click', (e) => {
    
            const clickedOnButtons = e.target;
    
            function addValue () {
    
                if(clickedOnButtons.hasAttribute('type')) {
        
                    setNewQtdWhenClick(clickedOnButtons);
                    setValuePrice();
        
                }
    
            }
    
            addValue();
    
        });
    }
    ifYourTargetIsAddOrRemoveButton();

}

addPrice();