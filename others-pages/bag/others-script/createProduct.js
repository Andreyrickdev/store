(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const converted = JSON.parse(productsInStore);
    console.log(converted);

    function getListOfProductUlTag () {
        
        function getArticle () {
            const getArticleById = document.getElementById('article');
            return getArticleById;
        }

        function getUl () {
            const getArticleById = getArticle();
            const ul = getArticleById.getElementsByTagName('ul')[0];
            return ul;
        }

        return getUl();
    }

    function createLi () {
        const li = document.createElement('li');
        li.classList.add('product');
        return li;
    }

    function createDiv () {
        const div = document.createElement('div');
        return div;
    }

    function createImgDiv () {
        for(idProduct of converted) {
            const div = createDiv();
    
            div.classList.add('img-product');
            
            let product;

            function takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo () {
                if (isNaN(idProduct.product.slice(-2)) == true) {
                    product = Number(idProduct.product.slice(-1));
                    console.log(product);
                } else {
                    product = Number(idProduct.product.slice(-2));
                    console.log(product);
                }
            }
            takeTwoIndicesIfReturnsNaNItWillTakeOneIfNotItWillTakeTwo();
        }


    }
    createImgDiv();

    function createH1 () {
        const h1 = document.createElement('h1');
        return h1;
    }

    function createP () {
        const p = document.createElement('p');
        return p;
    }

    function createSpan () {
        const span = document.createElement('span');
        return span;
    }


})();