class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let {
            title,
            price = 0,
            id
        } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData();
        this._render();
    }

    init() {}

    _fetchData() {
        this.data = [{
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 3,
                title: 'Mouse',
                price: 100
            },
            {
                id: 4,
                title: 'Gamepad'
            },
        ];
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
    sumGoodsPrice() { //Метод подсчитывающий сумму всех товаров
        let sum = 0;
        for (let product of this.goods) {
            sum = sum + product.price;
        }
        return sum;
    }
}

const list = new ProductsList();

class CartItem extends ProductItem { //класс продукт в корзине
    constructor(id, title, price, img, quantity = 1, subtotal) {
        super(id, title, price, img); //у клсса-родителя берем базовые параметры
        this.quantity = quantity; //это количество одного и того же товара.
        this.subtotal = this.price * this.quantity; //стоимость товара = цена умноженная на количество
    }

    shipping() {
        //Метот связанный с доставкой конкретного товара, например, возвращает FREE
    }

    render() {
        //Метод рендеринга экзепляра товара в корзине
    }

}

class Cart { //класс Корзина
    constructor(container = ".cart", paymentAddress, promokod) {
        this.container = container;
        this.allItems = []; //корзина содержищая CartItem
        this.paymentAddress = paymentAddress; //Адрес доставки
        this.promokod = promokod; // Промокод на скидку
    }
    addToCart() { //добавление в корзину
    };

    delFromCart() { //удаление из корзины
    };

    shipping() { //метод расчета доставки товара.
    };

    discount() { //метод расчета скидки
    };

    grandtotal() { //метод расчета полной стоимости всей корзины товаров (с количсетвом, скидками и доставкой)// с учетом CartItem.subtotal и discount() и shipping();
    };

    checkout() { //метод вызов оплаты корзины
    };

    render() { //рендеринг страницы корзины со всеми экзеплярами товара.
    };
}

// const products = [
//     { id: 1, title: 'Notebook', price: 2000 },
//     { id: 2, title: 'Keyboard', price: 200 },
//     { id: 3, title: 'Mouse', price: 100 },
//     { id: 4, title: 'Gamepad' },
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/100x50') => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${product.title}">
//                  <div class="desc">
//                      <h3>${product.title}</h3>
//                      <p>${product.price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };

// const renderProduct = (product, img = 'https://placehold.it/100x50') => {
//     const { title, price = 10 } = product;
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };

// const renderPage = productsList => {
//     // document.querySelector(`.products`).innerHTML = productsList.map(product => renderProduct(product)).join('');
//     const element = document.querySelector(`.products`);
//     let strElements = '';
//     for (let product of productsList) {
//         element.insertAdjacentHTML('beforeend', renderProduct(product));
//     }
// };
//
// renderPage(products);