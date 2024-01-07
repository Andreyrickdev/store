function addPrice () {

    const button = document.getElementById('footer');
    const numPrice = button.getElementsByClassName('num-prices')[0];

    function setValuePrice () {

        

    }

    document.addEventListener('DOMContentLoaded', () => {

        

    });

    document.addEventListener('click', (e) => {

        const clickedOnButtons = e.target;

        function addValue () {

            if(clickedOnButtons.hasAttribute('type')) {
    
                function selectItems () {
                    const items = document.getElementsByClassName('product');
                    return items;
                }
        
                let sumAllMultiplications = [];
                let sum;
        
                function readAllItems () {
        
                    const items = selectItems();
        
                    for(let item of items) {
                        try {
                            const allH1 = item.querySelector('h1').innerText;
                            const allNumItems = item.querySelector('.num-items').innerText;
                            const resultMultiplications = allH1 * allNumItems;
            
                            sumAllMultiplications.push(resultMultiplications);
            
                            sum = sumAllMultiplications.reduce((total, valor) => total + valor, 0);
                        } catch {}

                    }
        
                    try {
                        numPrice.innerText = sum.toFixed(2);
                    } catch {
                        numPrice.innerText = '00.00';
                    }
        
                }
        
                readAllItems();
    
            }

        }

        addValue();

    });

}

addPrice();