function addOrRemoveItems () {

    function selectedNumItems () {
        const num = document.getElementsByClassName('num-items');
        return num;
    }

    function addOrRemove () {

        document.addEventListener('click', (e) => {
            
            const buttonAddOrRemove = e.target; 
            
            if(buttonAddOrRemove.classList.contains('button-remove')) {
                alert('deu certo');
            }

        })

    }

    addOrRemove();
}

addOrRemoveItems();