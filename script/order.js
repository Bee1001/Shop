const displayUsers = () => {
    const userTable = document.querySelector('.user-table');
    const customers = JSON.parse(localStorage.getItem('user'));

    let html = '';
    if(customers) {
        if(customers.length) {
            customers.forEach((customer) => {
                html += `<tr id="${customer.id}">
                    <td>${customer.name}</td>
                    <td style="text-transform: none; text-align: center;">${customer.email}</td>
                    <td></td>
                    <td class="td-action">
                        <button class="btn-delete btn-delete-user" onclick="togglePopupDelete()">
                            <i class="ri-delete-bin-6-line"></i>
                        </button>
                        <div class="popup-delete-post user-popup-delete-post">
                            <div class="delete-popup-content">
                                Do you want to delete this user?
                            </div>
                            <div class="btn-choose">
                                <button class="btn-yes user-btn-yes" data-id="${customer.id}">Yes</button>
                                <button class="btn-no user-btn-no">No</button>
                            </div>
                        </div>
                    </td>
                </tr>`
            });
        } else {
            html += `<tr>
                <td colspan="4" style="text-align: center;">You have no user yet</td>
            </tr>   `
        }
        userTable.innerHTML = html;
    }
}

function deleteUser() {
    const deleteBtn = document.querySelectorAll('.btn-delete-user');
    const deletePopup = document.querySelectorAll('.user-popup-delete-post');
    const noBtn = document.querySelectorAll('.user-btn-no');
    const yesBtn = document.querySelectorAll('.user-btn-yes');

    deleteBtn.forEach((item, index) => {
        item.onclick = function() {
            const users = JSON.parse(localStorage.getItem('user'));
            deletePopup[index].classList.toggle('show');

            noBtn[index].onclick = () => deletePopup[index].classList.toggle('show');

            yesBtn[index].onclick = function() {
                const id = this.getAttribute('data-id');
                const filtered = users.filter(user => user.id != id); 

                localStorage.setItem('user', JSON.stringify(filtered));
                displayUsers();
            }
        }
    })
}

const displayOrderedTable = () => {
    const orderTable = document.querySelector('.ordered-table');
    const orders = JSON.parse(localStorage.getItem('ordered'));

    let html = '';
    if(orders) {
        if(orders.length) {
            orders.forEach((ordered) => {
                const checked = ordered.status ? 'checked' : null;
                html += `<tr id="${ordered.id}">
                    <td style="text-align: center;">${ordered.orderDate}</td>
                    <td style="text-transform: none; text-align: center;">${ordered.username}</td>
                    <td>${ordered.totalPrice} ₫</td>
                    <td>
                        <input type="checkbox" data-id="${ordered.id}" id="checkbox" onchange="checkOrdered(this)" ${checked}>
                        <span>${ordered.status ? 'Completed' : 'In Process'}</span>
                    </td>
                    <td class="td-action" style="color: lightgreen;">
                        <span class="btn-view" data-id="${ordered.id}" onclick="togglePopupEdit()">
                            <i class="ri-eye-line"></i>
                        </span>
                    </td>
                </tr>`
            });
        } else {
            html += `<tr>
                <td colspan="4" style="text-align: center;">You have no users yet</td>
            </tr>   `
        }
        orderTable.innerHTML = html;
    }
}

const displayOrderedDetail = () => {
    const viewBtn = document.querySelectorAll('.btn-view');
    const popup = document.querySelector('.admin-popup');
    
    const orders = JSON.parse(localStorage.getItem('ordered'));

    viewBtn.forEach((item) => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const order = orders.find(order => order.id == id);

            popup.innerHTML = `
                <div class="ordered-container" style="margin: 130px;">
                    <div class="ordered-wrapper">
                        <div class="btn-close" onclick="togglePopupEdit()">
                            <i class="ri-close-line"></i>
                        </div>
                        <div class="ordered-heading">Ordered #${order.id}</div>
                        <div class="ordered-block">
                            <div class="ordered-title">
                                <i class="ri-map-pin-line"></i>
                                <span>Address</span>
                            </div>
                            <div class="ordered-info">
                                <span>${order.username}</span>
                                <span>${order.phonenumber}</span>
                                <span>${order.address}</span>
                            </div>
                        </div>
                        <div class="ordered-block">
                            <div class="ordered-title">
                                <i class="ri-information-line"></i>
                                <span>Information</span>
                            </div>
                            <div class="ordered-product-wrapper"></div>
                        </div>
                        <div class="ordered-total-price">
                            <span>Total Price: </span>
                            <span>${order.totalPrice} đ</span>
                        </div>
                    </div>
                </div>
            `;

            order.products.forEach(product => {
                document.querySelector('.ordered-product-wrapper').innerHTML += `
                    <div class="ordered-product">
                        <img src="${product.image}" alt="${product.name}" class="ordered-item-image">
                        <div class="ordered-item-info">
                            <span>${product.name}</span>
                            <span>${product.quantity} x ${product.price} đ</span>
                        </div>
                    </div>
                `
            })
            popup.classList.toggle('show');
        }
    })
}

function checkOrdered(e) {
    const orderList = JSON.parse(localStorage.getItem('ordered'));
    const id = e.getAttribute('data-id');
    const index = orderList.findIndex(order => order.id == id);
    
    document.querySelector('#checkbox').checked = !orderList[index].status;
    orderList[index].status = e.checked;
    localStorage.setItem('ordered', JSON.stringify(orderList));
    displayOrderedTable();
    displayTableOfBrand();
    displayTotalSales();
}

displayUsers();
displayOrderedTable();
displayOrderedDetail();
deleteUser();