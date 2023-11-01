function addPrice () {

    const button = document.getElementById('footer');
    const numPrice = button.getElementsByClassName('num-prices')[0];

    button.addEventListener('click', () => {

        function selectItems () {
            const items = document.getElementsByClassName('product');
            return items;
        }

        let resultMultiplications = [];
        let sum;

        function readAllItems () {

            const items = selectItems();

            for(let item of items) {
                
            }

        }

    });

}

addPrice();