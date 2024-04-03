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
            
            const yourTarget = e.target;
    
            if(yourTarget.classList.contains("yourFooter") ||yourTarget.id === 'footer') {
                price.classList.add('hide');
                finish.classList.remove('hide');
            }
    
        })
    }
    ifMouseOver();

    function ifMouseOut () {
        document.addEventListener('mouseout', (e) => {
    
            const price = selectPrice();
            const finish = selectFinish();
    
            const yourTarget = e.target;
    
            if(yourTarget.id === 'footer') {
                price.classList.remove('hide');
                finish.classList.add('hide');
            }
        
        });
    }
    ifMouseOut();

}

hidePriceOrFinish();