const products = JSON.parse(localStorage.getItem('products'));
const closeBtn = document.querySelector('.btn-close');

const displayProducts = () => {
    const productItem = document.querySelector('.product-item');

    let html = '';
    products.forEach(product => {
        html += `
            <div class="product-box" data-id="${product.id}">
                <img class="product-image" src="${product.image}" alt="${product.name}" data-id="${product.id}">
                <div class="product-info">
                    <span>${product.name}</span>
                    <span>$${product.price}</span>
                </div>
                <button class="button-add" data-id="${product.id}">Add to cart</button>
            </div>
        `
    });
    productItem.innerHTML = html;
}

const displayDetail = () => {
    const productPopup = document.querySelector('.product-popup');
    const productImg = document.querySelectorAll('.product-image');

    productImg.forEach(item => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const products = JSON.parse(localStorage.getItem('products'));
            const product = products.find(product => product.id == id);

            productPopup.innerHTML = `
                <div class="product-popup-wrapper">
                    <div class="close-detail-product">
                        <i class="ri-close-line btn-close" onclick="
                            (function() {
                                closePopup();
                            })();
                        "></i>
                    </div>
                    <div class="product-detail">
                        <div class="product-detail-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-detail-content">
                            <div class="product-detail-info">
                                <span class="product-detail-name">${product.name}</span>
                                <span class="product-detail-price">$${product.price}</span>
                                ${product.status === '1' ?
                                    `<div class="product-detail-status" style="color: 'lightgreen'">
                                        <span class="in_stock"><i class="ri-checkbox-circle-fill"></i></span>
                                        <span class="in_stock">In stock</span>
                                    </div>` : 
                                    `<div class="product-detail-status" style="color: 'red'">
                                        <span class="out_of_stock"><i class="ri-close-circle-fill"></i></span>
                                        <span class="out_of_stock">Out of stock</span>
                                    </div>`
                                }
                            </div>
                            <p class="product-detail-description">${product.description}</p>
                            <form class="cart">
                                <div class="quantity buttons-added">
                                    <button type="button" class="minus" onclick="addCountToCart('-')">
                                        <i class="ri-subtract-fill"></i>
                                    </button>
                                    <input type="number" class="input-quantity" step="1" min="1" max name="quantity" value="1">
                                    <button type="button" class="plus" onclick="addCountToCart('+')">
                                        <i class="ri-add-fill"></i>
                                    </button>
                                </div>
                                <button type="button" class="add_to_cart" onclick="addCountToCart('add', ${product.id})">Add To Cart</button>
                            </form>
                            <div class="brand">
                                <span>Brand: </span>
                                <span>${product.brand}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `

            document.body.style.overflow = 'hidden';
            productPopup.style.display = 'block';
        }
    })
}

const displayCart = () => {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    const customers = JSON.parse(localStorage.getItem('user'));
    const cartPopup = document.querySelector('.cart-popup');
    const cartTotal = document.querySelector('.cart-total');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartNoItem = document.querySelector('.cart-noItem');
    const cartButton = document.querySelector('.cart-button');

    if(!loggedin) {
        cartPopup.innerHTML = '<div>Please login to view cart</div>';
        return;
    }

    const user = customers.find(customer => customer.id === loggedin.id);
    let totalPrice = 0;
    if(!user.cart.length) {
        cartTotal.style.display = 'none';
        cartWrapper.style.display = 'none';
        cartButton.style.display = 'none';
        cartNoItem.style.display = 'block';
        return;
    }

    cartTotal.style.display = 'flex';
    cartWrapper.style.display = 'block';
    cartButton.style.display = 'block';
    cartNoItem.style.display = 'none';

    let html = '';
    user.cart.forEach(cart => {
        html += `
            <div class="cart-item">
                <img src="${cart.image}" alt="${cart.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <span>${cart.name}</span>
                    <span>${cart.count} x ${cart.price}$</span>
                </div>
                <button onclick="removeFromCart(${cart.id})" class="delete-cart" data-id="${cart.id}"><i class="ri-delete-bin-line"></i></button>
            </div>`
        totalPrice += (cart.count * cart.price);
    });

    cartWrapper.innerHTML = html;

    cartTotal.innerHTML = `
        <span>TOTAL: </span>
        <div class="total-horizontal"></div>
        <span>${parseFloat(totalPrice).toPrecision(5)}$</span>
    `;
}

const closePopup = () => {
    document.body.style.overflow = 'initial';
    document.querySelector('.product-popup').style.display = 'none';
}

const addCountToCart = (char, id) => {
    let quantity = document.querySelector(".input-quantity");
    if (char == '-') {
        if (quantity.value > 0) quantity.value = Number(quantity.value) - 1;
    }
    else if (char == '+') {
        quantity.value = Number(quantity.value) + 1;
    }
    else {
        const loggedin = JSON.parse(localStorage.getItem('loggedin'));
        quantity = Number(quantity.value);

        if(!loggedin) {
            addAlert("Please login first to add to cart");
            return;
        }

        if (quantity <= 0 ) return;

        const product = products.find(product => product.id == id);
        const customers = JSON.parse(localStorage.getItem('user'));
        const index = customers.findIndex(customer => customer.id == loggedin.id);

        const indexProduct = customers[index].cart.findIndex(item => item.id == product.id);

        if (indexProduct != -1)
            customers[index].cart[indexProduct].count += quantity;
        else
            customers[index].cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                count: quantity
            });

        localStorage.setItem('user', JSON.stringify(customers));
        addAlert("Add to cart successfully", "success");
        displayCart();
    }
}

const addToCart = () => {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    const addBtn = document.querySelectorAll('.button-add');

    addBtn.forEach(button => {
        button.onclick = function() {
            if(!loggedin) {
                addAlert("Please login first to add to cart");
                return;
            }

            const customers = JSON.parse(localStorage.getItem('user'));
            const product = products.find(product => product.id == this.getAttribute('data-id'));
            const index = customers.findIndex(customer => customer.id == loggedin.id);

            const indexProduct = customers[index].cart.findIndex(item => item.id == product.id);

            if (indexProduct != -1) {
                customers[index].cart[indexProduct].count++;
            } else {
                customers[index].cart.push({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    count: 1
                });
            }

            localStorage.setItem('user', JSON.stringify(customers));
            addAlert("Add to cart successfully", "success");
            displayCart();
        }
    })
}
const removeFromCart = (id) => {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));

    if(loggedin) {
        const customers = JSON.parse(localStorage.getItem('user'));
        const index = customers.findIndex(customer => customer.id == loggedin.id);
        
        customers[index].cart = customers[index].cart.filter(cart => cart.id != id);

        localStorage.setItem('user', JSON.stringify(customers));
        displayCart();
    }
}

displayProducts();
displayDetail();
displayCart();
addToCart();
