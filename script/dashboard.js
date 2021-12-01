const order = JSON.parse(localStorage.getItem('ordered')) || [
    {
        id: 20013195232437,
        address: "TP Cao Lanh",
        orderDate: "1/12/2021",
        phonenumber: "0123456789",
        status: false,
        totalPrice: "1.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Vans",
                price: "1.000.000",
                brand: "vans"
            }
        ]
    },
    {
        id: 13653195232437,
        address: "TP Cao Lanh",
        orderDate: "28/11/2021",
        phonenumber: "0123456789",
        status: false,
        totalPrice: "1.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 1320943832437,
        orderDate: "28/11/2021",
        phonenumber: "0123456789",
        status: false,
        totalPrice: "4.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Adidas",
                price: "2.000.000",
                brand: "adidas"
            },
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Converse",
                price: "2.000.000",
                brand: "converse"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 136510002332437,
        orderDate: "27/11/2021",
        phonenumber: "0123456789",
        status: false,
        totalPrice: "1.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 13021095232437,
        orderDate: "26/11/2021",
        phonenumber: "0123456789",
        status: true,
        totalPrice: "2.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 2,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 13653195839437,
        orderDate: "25/11/2021",
        phonenumber: "0123456789",
        status: true,
        totalPrice: "3.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 3,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 136531952109347,
        orderDate: "24/11/2021",
        phonenumber: "0123456789",
        status: true,
        totalPrice: "1.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    },
    {
        address: "TP Cao Lanh",
        id: 20103195232437,
        orderDate: "23/11/2021",
        phonenumber: "0123456789",
        status: true,
        totalPrice: "1.000.000",
        userId: 1365319511227,
        username: "Nguyen",
        products: [
            {
                quantity: 1,
                id: 1040986974970,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
                name: "Nike Air Force 1 Shadow",
                price: "1.000.000",
                brand: "nike"
            }
        ]
    }
]
localStorage.setItem('ordered', JSON.stringify(order));


let date = new Date();
let currentMonth = (1 + date.getMonth()).toString();
currentMonth = currentMonth.length > 1 ? currentMonth : '0' + currentMonth;
let currentYear = date.getFullYear().toString();

function totalSalesInMonth() {
    const orderList = JSON.parse(localStorage.getItem('ordered'));

    let totalSalesInMonth = 0;
    let totalSalesPreMonth = 0;
    let quantityInMonth = 0;
    let quantityPreMonth = 0;

    orderList.forEach(order => {
        if(order.status) {
            let month = order.orderDate.split('/')[1];
            let year = order.orderDate.split('/')[2];

            if(currentMonth == month && currentYear == year) {
                totalSalesInMonth += formattedPrice(order.totalPrice);
                order.products.forEach(product => quantityInMonth += product.quantity);
            }
            if(currentMonth - 1 == month && currentYear == year) {
                totalSalesPreMonth += formattedPrice(order.totalPrice);
                order.products.forEach(product => quantityPreMonth += product.quantity);
            }
        }
    });

    return [
        totalSalesInMonth.toLocaleString('vi', {style: 'currency', currency: 'VND'}), 
        totalSalesPreMonth.toLocaleString('vi', {style: 'currency', currency: 'VND'}),
        quantityInMonth,
        quantityPreMonth
    ];
}
function totalSalesPerBrand() {
    const orderList = JSON.parse(localStorage.getItem('ordered'));
    const brands = ['nike', 'adidas', 'vans', 'converse'];

    let sum;

    let totalSalesPerBrand = {
        'nike': '',
        'adidas': '',
        'vans': '',
        'converse': ''
    }

    for(let i in brands) {
        sum = 0;
        orderList.forEach(order => {
            if(order.status) {
                let month = order.orderDate.split('/')[1];
                let year = order.orderDate.split('/')[2];
            
                if(currentMonth == month && currentYear == year) {
                    order.products.forEach(product => {
                        if(product.brand === brands[i])
                            sum += formattedPrice(product.price) * product.quantity;
                    })
                }
            }
        })
        totalSalesPerBrand[brands[i]] = sum;
    }
    return totalSalesPerBrand;
}
function quantityPerBrand() {
    const orderList = JSON.parse(localStorage.getItem('ordered'));
    const brands = ['nike', 'adidas', 'vans', 'converse'];

    let count = 0;

    let quantityPerBrand = {
        'nike': 0,
        'adidas': 0,
        'vans': 0,
        'converse': 0
    }

    for(let i in brands) {
        count = 0;
        orderList.forEach(order => {
            if(order.status) {
                let month = order.orderDate.split('/')[1];
                let year = order.orderDate.split('/')[2];
            
                if(currentMonth === month && currentYear === year) {
                    order.products.forEach(product => {
                        if(product.brand === brands[i]) 
                            count += product.quantity;
                    })
                }
            }
        })
        quantityPerBrand[brands[i]] = count;
    }
    return quantityPerBrand;
}

function displayTableOfBrand() {
    const table = document.querySelector('.dashboard-table');

    let html = '', index = 1;
    let total = totalSalesPerBrand();
    let quantity = quantityPerBrand();
    
    for(let key in total) {
        html += `
            <tr>
                <td style="text-align: center;">${index++}</td>
                <td style="text-transform: capitalize;">${key}</td>
                <td style="text-transform: none;">${total[key].toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
                <td>${quantity[key]}</td>
            </tr>
        `
    }
    table.innerHTML = html;
}

function displayTotalSales() {
    const totalInMonth = document.querySelector('.total-in-month');
    const totalPreMonth = document.querySelector('.total-pre-month');

    const qtyInMonth = document.querySelector('#qty-inmonth');
    const qtyPreMonth = document.querySelector('#qty-premonth');

    const inmonth = document.querySelector('#inmonth');
    const premonth = document.querySelector('#premonth');

    let arr = totalSalesInMonth();

    inmonth.innerText = `In the ${currentMonth}th month`;
    premonth.innerText = `In the ${currentMonth - 1}th month`;

    totalInMonth.innerText = arr[0];
    totalPreMonth.innerText = arr[1];
    qtyInMonth.innerText = arr[2];
    qtyPreMonth.innerText = arr[3];
}

displayTableOfBrand();
totalSalesInMonth();
totalSalesPerBrand();
displayTotalSales();
