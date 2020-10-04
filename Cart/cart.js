/*
 * працюєм з колекцією товарів в корзині:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

 console.log('hi')
 const cart = {
     items: [],
     getItems() {
         return this.items;
     },
     addItem(product) {
        for(const item of this.items) {
            if(item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }

         this.items.push(newProduct)
     },
     remove(productName) {
        for(let i = 0; i < this.items.length; i += 1) {
            if(this.items[i].name === productName.name) {
                this.items.splice(i, 1)
            }
        }
     },
     clear () {
        this.items = []
     },
     countTotalPrice() {
         let total = 0;

         for(const item of this.items) {
             total += item.price * item.quantity;
            }
            return total;
     },

     increaseProduct(productName) {
         for(const item of this.items) {
             if(item.name === productName.name) {
                item.quantity += 1;

             }
         }
     },

     decreaseProduct(productName) {
         for(const item of this.items) {
             if(item.name === productName.name) {
                if(item.quantity - 1 === 0) {
                 this.remove(productName);
                 return;
             } 

             item.quantity -= 1;

            }

        }
     }
 }

 

 cart.addItem({ name: '🍎', price: 50 })
 cart.addItem({ name: '🍎', price: 50 })
 cart.addItem({ name: '🍎', price: 50 })
//  cart.addItem({ name: '🍎', price: 50 })
//  cart.addItem({ name: '🍎', price: 50 })
 cart.addItem({ name: '🍇', price: 70 })
 cart.addItem({ name: '🍇', price: 70 })
 cart.addItem({ name: '🍋', price: 60 })

//  console.table(cart.getItems())
//  console.log(cart.remove('🍎'))
//  console.table(cart.getItems())
//  cart.clear()
// cart.increaseProduct({ name: '🍋', price: 60 });
// cart.decreaseProduct({ name: '🍋', price: 60 });
// cart.decreaseProduct({ name: '🍋', price: 60 });
// cart.decreaseProduct({ name: '🍇', price: 70 });
cart.decreaseProduct({ name: '🍇', price: 70 });
// cart.decreaseProduct({ name: '🍋', price: 60 });

console.log(cart.countTotalPrice());
// cart.clear()
// cart.remove({ name: '🍎', price: 50 })
cart.decreaseProduct({ name: '🍎', price: 50 })
// cart.decreaseProduct({ name: '🍎', price: 50 })
// cart.decreaseProduct({ name: '🍎', price: 50 })

console.table(cart.getItems())