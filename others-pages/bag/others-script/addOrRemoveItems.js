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
                    dadOfAll.remove();
                }

            }

        })

    }

    addOrRemove();
}

addOrRemoveItems();