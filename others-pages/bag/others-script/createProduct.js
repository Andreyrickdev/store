(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const convertido = JSON.parse(productsInStore);
    console.log(convertido);

    function getListOfProductUlTag () {
        
        function getArticle () {
            const getArticleById = document.getElementById('article');
            return getArticleById;
        }

    }


})();