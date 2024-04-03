function addPrice () {

    function getFooter () {
        const button = document.getElementById('footer');
        return button;
    }
    const button = getFooter();

    function getNumPrices () {
        const numPrice = button.getElementsByClassName('num-prices')[0];
        return numPrice;
    }
    const numPrice = getNumPrices();

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
                        const allH1 = item.querySelector('h1').innerText;
                        const allNumItems = item.querySelector('.num-items').innerText;
                        const resultMultiplications = allH1 * allNumItems;
        
                        sumAllMultiplications.push(resultMultiplications);
        
                        sum = sumAllMultiplications.reduce((total, valor) => total + valor, 0);
                    } catch {}
    
                }
            }
            retrievingEachValueAndMultiplyingItByTheQuantityOfItems();

            try {
                numPrice.innerText = sum.toFixed(2);
            } catch {
                numPrice.innerText = '00.00';
            }

        }

        readAllItems();

    }

    document.addEventListener('DOMContentLoaded', () => {

        setValuePrice();

    });

    document.addEventListener('click', (e) => {

        const clickedOnButtons = e.target;

        function addValue () {

            if(clickedOnButtons.hasAttribute('type')) {
    
                setValuePrice();
    
            }

        }

        addValue();

    });

}

addPrice();