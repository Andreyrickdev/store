function addOrRemoveItems () {

    function addOrRemove () {

        document.addEventListener('click', (e) => {
            
            const buttonAddOrRemove = e.target; 
            const getDadDiv = buttonAddOrRemove.parentNode;
            let getNumItem = getDadDiv.querySelector('p');
            
            if(buttonAddOrRemove.classList.contains('button-remove')) {

                let num = Number(getNumItem.innerText);
                getNumItem.innerText = --num;
                alert(1);

            }

        })

    }

    addOrRemove();
}

addOrRemoveItems();