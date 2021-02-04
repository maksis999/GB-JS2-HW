import {
    CartItem
} from "./CartItem.js";

export const Cart = {
    inject: ['API', 'getJson', 'postJson', 'putJson'],
    components: {
        CartItem
    },
    data() {
        return {
            imgCart: 'https://placehold.it/50x150',
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, {
                        quantity: 1
                    })
                    .then(data => {
                        if (data.result) {
                            find.quantity++
                        }
                    });
                return;
            }

            let prod = Object.assign({
                quantity: 1
            }, product);
            this.postJson(`/api/cart`, prod)
                .then(data => {
                    if (data.result) {
                        this.cartItems.push(prod);
                    }
                });
        },
        remove(item) {
            if (item.quantity > 1) {
                this.putJson(`/api/cart/${find.id_product}`, {
                        quantity: -1
                    }) //Серверную Корзину уменьшаем на 1
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.deleteJson(this.cartUrl + item.id_product, item) //удаляем из Серверной Корзины по id
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    mounted() {
        this.getJson(`/api/cart`)
            .then(data => {
                if (!data) {
                    return;
                }
                for (let product of data.contents) {
                    this.cartItems.push(product);
                }
            });
    },
    template: `
    <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
               <CartItem 
               v-for="item of cartItems" 
               :key="item.id_product"
               :img="imgCart"
               :item="item"
               @remove="remove"
               ></CartItem>
            </div>
    `
}