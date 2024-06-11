(function () {


    const suggestion = [
        'Classic Beef Burger',
        'Bacon Cheeseburger',
        'BBQ Ranch Burger',
        'Mushroom Swiss Burger',
        'Chocolate Fudge Brownie',
        'Strawberry Cheesecake',
        'Vanilla Bean Cupcake',
        'Cheesecake de Ovomaltine',
        'Beer',
        'Margarita',
        'Pepsi',
        'Coca Cola',
    ];


    function showSuggestions (value) {
        
        function getProductFound () {
            const productFound = document.getElementById('product-found');
            return productFound;
        }
        const productFound = getProductFound();


        function getAInProductFound () {
            let suggestionBox = document.getElementById('suggestion');
            return suggestionBox;
        }
        let suggestionBox = getAInProductFound();

        suggestionBox.innerHTML = "";

        if(value.length === 0) {
            productFound.classList.remove('found');
            return;
        }

        const filteredAllSuggestions = suggestion.filter(suggestion =>
            suggestion.toLowerCase().startsWith(value.toLowerCase())
        );

        function hrefForYourSearch () {
        
            switch (filteredAllSuggestions[0]) {
                case 'Classic Beef Burger':
                    yourSuggestion('product0');
                    break;
                case 'Bacon Cheeseburger':
                    yourSuggestion('product1');
                    break;
                case 'BBQ Ranch Burger':
                    yourSuggestion('product2');
                    break;
                case 'Mushroom Swiss Burger':
                    yourSuggestion('product3');
                    break;
                case 'Chocolate Fudge Brownie':
                    yourSuggestion('product4');
                    break;
                case 'Strawberry Cheesecake':
                    yourSuggestion('product5');
                    break;
                case 'Vanilla Bean Cupcake':
                    yourSuggestion('product6');
                    break;
                case 'Cheesecake de Ovomaltine':
                    yourSuggestion('product7');
                    break;
                case 'Beer':
                    yourSuggestion('product8');
                    break;
                case 'Margarita':
                    yourSuggestion('product9');
                    break;
                case 'Pepsi':
                    yourSuggestion('product10');
                    break;
                case 'Coca Cola':
                    yourSuggestion('product11');
                    break;
                default:
                    'none';
            }
    
        }


        function yourSuggestion (product) {
            if (filteredAllSuggestions.length > 0) {
                suggestionBox.innerHTML = filteredAllSuggestions[0];
                console.log(suggestionBox);
                suggestionBox.setAttribute('href', `#${product}`);
                productFound.classList.add('found');
                productFound.classList.remove('not-found');
            } else {
                suggestionBox.innerHTML = "No suggestions found.";
                suggestionBox.removeAttribute('href');
                productFound.classList.remove('found');
                productFound.classList.add('not-found');
            }
        }


        hrefForYourSearch();
    }
    window.showSuggestions = showSuggestions;


    function scrollToProductInSearch () {

        const menuItem = document.querySelector('#suggestion');

        menuItem.addEventListener('click', scrollToIdOnClick);

        function getScrollTopByHref (element) {
            const id = element.getAttribute('href');
            return document.querySelector(id).offsetTop;
        }


        function scrollToIdOnClick (event) {
            event.preventDefault();
            const to = getScrollTopByHref(event.currentTarget) - 100;
        
            scrollToPosition(to);
        }


        function scrollToPosition (to) {
            smoothScrollTo(0, to, 700);
        }


        function smoothScrollTo(endX, endY, duration) {
            const startX = window.scrollX || window.pageXOffset;
            const startY = window.scrollY || window.pageYOffset;
            const distanceX = endX - startX;
            const distanceY = endY - startY;
            const startTime = new Date().getTime();
          
            duration = typeof duration !== 'undefined' ? duration : 400;
          
            const easeInOutQuart = (time, from, distance, duration) => {
              if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
              return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
            };
          
            const timer = setInterval(() => {
              const time = new Date().getTime() - startTime;
              const newX = easeInOutQuart(time, startX, distanceX, duration);
              const newY = easeInOutQuart(time, startY, distanceY, duration);
              if (time >= duration) {
                clearInterval(timer);
                window.scroll(endX, endY);
              } else {
                  window.scroll(newX, newY);

              }
            }, 1000 / 60); // 60 fps
          };


    }
    scrollToProductInSearch();

})();