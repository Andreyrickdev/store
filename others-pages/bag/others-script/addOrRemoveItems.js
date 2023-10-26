function addOrRemoveItems () {

    function selectedRemove () {
        const remove = document.getElementsByClassName('button-remove');
        return remove;
    }

    function selectedNumItems () {
        const num = document.getElementsByClassName('num-items');
        return num;
    }

    function selectedAdd () {
        const add = document.getElementsByClassName('button-add');
        return add;
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