function hidePriceOrFinish () {

    function selectPrice () {
        const price = document.getElementsByClassName('price')[0];
        return price;
    }

    function selectFinish () {
        const finish = document.getElementsByClassName('finish')[0];
        return finish;
    }

    function ifMouseOver () {
        document.addEventListener('mouseover', (e) => {
            const price = selectPrice();
            const finish = selectFinish();
            
            function getTarget () {
                const yourTarget = e.target;
                return yourTarget;
            }
            const yourTarget = getTarget();
    
            function ifYourTargetIsTotalPrice () {
                if(yourTarget.classList.contains("yourFooter") ||yourTarget.id === 'footer') {
                    price.classList.add('hide');
                    finish.classList.remove('hide');
                }
            }
            ifYourTargetIsTotalPrice();
    
        })
    }
    ifMouseOver();

    function ifMouseOut () {
        document.addEventListener('mouseout', (e) => {
            const price = selectPrice();
            const finish = selectFinish();
    
            function getTarget () {
                const yourTarget = e.target;
                return yourTarget;
            }
            const yourTarget = getTarget();
    
            function ifYourTargetIsTotalPrice () {
                if(yourTarget.id === 'footer') {
                    price.classList.remove('hide');
                    finish.classList.add('hide');
                }
            }
            ifYourTargetIsTotalPrice();
        
        });
    }
    ifMouseOut();

}

hidePriceOrFinish();