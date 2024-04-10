(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const convertido = JSON.parse(productsInStore);
    console.log(convertido);

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


})();