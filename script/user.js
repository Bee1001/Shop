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
                        <button class="btn-delete" onclick="togglePopupDelete()">
                            <i class="ri-delete-bin-6-line"></i>
                        </button>
                        <div class="popup-delete-post">
                            <div class="delete-popup-content">
                                Do you want to delete this user?
                            </div>
                            <div class="btn-choose">
                                <button class="btn-yes" data-id="${customer.id}">Yes</button>
                                <button class="btn-no">No</button>
                            </div>
                        </div>
                    </td>
                </tr>`
            });
        } else {
            html += `<tr>
                <td colspan="4" style="text-align: center;">You have no users yet</td>
            </tr>   `
        }
        userTable.innerHTML = html;
    }
}

const displayOrderedTable = () => {
    const orderedTable = document.querySelector('.ordered-table');
    const orderedList = JSON.parse(localStorage.getItem('ordered'));

    let html = '';
    if(orderedList) {
        if(orderedList.length) {
            orderedList.forEach((ordered) => {
                const checked = ordered.status == true ? 'checked' : null;
                html += `<tr id="${ordered.id}">
                    <td>${ordered.orderDate}</td>
                    <td style="text-transform: none; text-align: center;">${ordered.username}</td>
                    <td>${ordered.totalPrice}</td>
                    <td>
                        <input type="checkbox" data-id="${ordered.id}" id="checkbox" onchange="checkOrdered(this)" ${checked}>
                        <span>${ordered.status == true ? 'Completed' : 'In Process'}</span>
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
        orderedTable.innerHTML = html;
    }
}

const displayOrderedDetail = () => {
    const viewBtn = document.querySelectorAll('.btn-view');
    const popup = document.querySelector('.admin-popup');
    
    const ordered = JSON.parse(localStorage.getItem('ordered'));

    viewBtn.forEach((item) => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const index = ordered.findIndex(x => x.id == id);

            popup.innerHTML = '';
            popup.innerHTML = `
                <div class="ordered-container" style="margin: 130px;">
                    <div class="ordered-wrapper">
                        <div class="btn-close" onclick="togglePopupEdit()">
                            <i class="ri-close-line"></i>
                        </div>
                        <div class="ordered-heading">Ordered #${ordered[index].id}</div>
                        <div class="ordered-block">
                            <div class="ordered-title">
                                <i class="ri-map-pin-line"></i>
                                <span>Address</span>
                            </div>
                            <div class="ordered-info">
                                <span>${ordered[index].username}</span>
                                <span>${ordered[index].phonenumber}</span>
                                <span>${ordered[index].address}</span>
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
                            <span>${ordered[index].totalPrice}</span>
                        </div>
                    </div>
                </div>
            `;

            ordered[index].products.forEach(product => {
                document.querySelector('.ordered-product-wrapper').innerHTML += `
                    <div class="ordered-product">
                        <img src="${product.image}" alt="${product.name}" class="ordered-item-image">
                        <div class="ordered-item-info">
                            <span>${product.name}</span>
                            <span>${product.count} x ${product.price}</span>
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
}

displayUsers();
displayOrderedTable();
displayOrderedDetail();