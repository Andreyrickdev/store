function hidePriceOrFinish () {

    function selectPrice () {
        const price = document.getElementsByClassName('price')[0];
        return price;
    }

    function selectFinish () {
        const finish = document.getElementsByClassName('finish')[0];
        return finish;
    }

    function hide () {
        const price = selectPrice();
        const finish = selectFinish();

        setInterval(() => {
            price.classList.toggle('hide');
            finish.classList.toggle('hide');
        },2000);
    }

    hide();

}

// hidePriceOrFinish();