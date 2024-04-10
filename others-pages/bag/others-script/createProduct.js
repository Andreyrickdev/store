(function () {

    const productsInStore = localStorage.getItem("productsInBag");
    const convertido = JSON.parse(productsInStore);
    console.log(convertido);

    


})();