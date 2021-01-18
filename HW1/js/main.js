const products = [{
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
        title: 'Gamepad',
        price: 87
    },
];

const defaultImg = "https://linuxgid.ru/wp-content/uploads/2015/09/komp.jpg"
//Задание 2. Дополнительный параметр функции со значением по-умолчанию - URL картинки-заглушки
const renderProduct = (title, price, img = defaultImg) => {
    return `<div class="product-item">
                <img src = "${img}">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>`
};

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productsElements.join('');
};
/* Задание 3 - ответ: запятая появляется в следствии вывода значений массива, которые разделяются запятыми
        Метод .join() объединяет все элементы массива в строку с заданным разделителем,
        в нашем случае разделитель "пустой", т.е. отсутствует совсем.
    */

render(products);