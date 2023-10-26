function addOrRemoveItems () {

    function addOrRemove () {

        document.addEventListener('click', (e) => {
            
            const buttonAddOrRemove = e.target; 
            const getDadDiv = buttonAddOrRemove.parentNode;
            const getNumItem = getDadDiv.querySelector('p');
            
            if(buttonAddOrRemove.classList.contains('button-remove')) {
                alert('deu certo');
            }

        })

    }

    addOrRemove();
}

addOrRemoveItems();