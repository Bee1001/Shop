const formPost = document.querySelector('.form-post');

const createProduct = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [
        {
            "id":1282406738503,
            "name":"Nike Blazer Mid",
            "price":"1.000.000",
            "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-dNWPTj.png",
            "brand":"nike",
            "description":"giay rat dep",
            "createdAt":"20/11/2021"
        },
        {
            "id":1275979804086,
            "name":"Nike RevolutionNike",
            "price":"2.000.000",
            "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-road-running-shoes-8P3bh3.png",
            "brand":"nike",
            "description":"giay rat dep",
            "createdAt":"20/11/2021"
        },
        {
            "id":509844779795,
            "name":"Nike Air Max",
            "price":"1.500.000",
            "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-shoes-Jkh1p6.png",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1009738651121,
            "name":"Converse Black Chuck 70 Hi Sneakers",
            "price":"900.000",
            "image":"https://bizweb.dktcdn.net/thumb/1024x1024/100/373/032/products/converse-classic-den-cao-co-fe73d640-a974-41e5-a3c0-229736b7b780.jpg?v=1601800958787",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587358,
            "name":"GIÀY ADIDAS ULTRABOOST DNA X LEGO® COLORS",
            "price":"2.200.000",
            "image":"https://assets.adidas.com/images/w_600,f_auto,q_auto/60712c4ffd24452fbe87acee00dbf61a_9366/Giay_adidas_Ultraboost_DNA_x_LEGO(r)_Colors_trang_H67955_01_standard.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        }
    ]

    localStorage.setItem('products', JSON.stringify(products));
}

const state = {
    'products': () => { return JSON.parse(localStorage.getItem('products')) },
    'page': 1,
    'rows': 5
}

const pagination = (products, page, rows) => {
    let start = (page - 1) * rows;
    let end = start + rows;
    let data = products.slice(start, end);
    
    let pages = Math.ceil(products.length / rows);

    return {
        'products': data,
        'pages': pages
    }
}

const handlePageButtons = (pages, products) => {
    const wrapper = document.querySelector('.pagination-wrapper');
    wrapper.innerHTML = '';

    for(let page = 1; page <= pages; page++) {
        wrapper.innerHTML += `<button value="${page}" class="number-page number-${page}">${page}</button>`;
        if(page == 1 && state.page == 1) 
        wrapper.innerHTML = `<button value="${page}" class="number-page number-${page} active">${page}</button>`;
    }
    const pageButtons = document.querySelectorAll('.number-page');
    pageButtons.forEach(pageButton => {
        pageButton.onclick = function() {
            pageButtons.forEach(pageButton => {
                pageButton.classList.remove('active');
            });

            document.querySelector('.product-table').innerHTML = '';
            state.page = this.value;
            
            pageButton.classList.add('active');
            
            displayTable(products);
            updateProduct();
            deleteProduct();

            document.querySelector(`.number-${state.page}`).classList.add('active');
        }
    })
}

const displayTable = (products) => {
    const productTable = document.querySelector('.product-table');
    const data = pagination(products, state.page, state.rows);
    const newProducts = data.products;

    let html = '';
    if(newProducts) {
        if(newProducts.length) {
            newProducts.forEach((product, index) => {
                html += `<tr id="${product.id}">
                    <td class="td-index">${product.id}</td>
                    <td class="td-image">
                        <img src="${product.image}" alt="">
                    </td>
                    <td>${product.name}</td>
                    <td>${product.brand}</td>
                    <td>${product.price} đ</td>
                    <td>${product.createdAt}</td>
                    <td class="td-action" style="color: lightgreen;">
                        <span class="btn-edit" data-id="${product.id}" onclick="togglePopupEdit()">
                            <i class="ri-edit-box-line"></i>
                        </span>
                    </td>
                    <td class="td-action">
                        <button class="btn-delete" onclick="togglePopupDelete()">
                            <i class="ri-delete-bin-6-line"></i>
                        </button>
                        <div class="popup-delete-post">
                            <div class="delete-popup-content">
                                Do you want to delete this product?
                            </div>
                            <div class="btn-choose">
                                <button class="btn-yes" data-id="${product.id}">Yes</button>
                                <button class="btn-no">No</button>
                            </div>
                        </div>
                    </td>
                </tr>`
            });
        } else {
            html += `<tr>
                <td colspan="10 " style="text-align: center;">You have no posts yet</td>
            </tr>`
        }
        productTable.innerHTML = html;
    }
    handlePageButtons(data.pages, products);
}
const addProduct = (e) => {
    e.preventDefault();

    const formData = state.products() || [];
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const brand = document.getElementById('brand').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const id = Math.floor(new Date().valueOf() * Math.random());

    if(!name || !price || !brand || !description || !image) {
        addAlert("One field is required");
        return;
    }

    const base64String = localStorage.getItem('image');

    formData.push({
        id: id,
        name: name,
        price: price,
        image: `data:image/png;base64,${base64String}`,
        brand: brand,
        description: description,
        createdAt: formattedDate(new Date())
    });

    localStorage.setItem('products', JSON.stringify(formData));
    addAlert("Your product was created", "success");

    formPost.reset();
    displayTable(state.products());
}

const deleteProduct = () => {
    const deleteBtn = document.querySelectorAll('.btn-delete');
    const deletePopup = document.querySelectorAll('.popup-delete-post');
    const noBtn = document.querySelectorAll('.btn-no');
    const yesBtn = document.querySelectorAll('.btn-yes');

    deleteBtn.forEach((item, index) => {
        item.onclick = function() {
            const products = state.products();
            deletePopup[index].classList.toggle('show');

            noBtn[index].onclick = () => deletePopup[index].classList.toggle('show');

            yesBtn[index].onclick = function() {
                const id = this.getAttribute('data-id');
                const filtered = products.filter(product => product.id != id); // 1 cai la chuoi 1 la so

                localStorage.setItem('products', JSON.stringify(filtered));
                displayTable(state.products());
            }
        }
    })
}

const editPost = (id, name, price, image, brand, description) => {
    const products = state.products();
    const product = products.find(product => product.id == id);

    let createdAt = formattedDate(new Date());
    let i = 0;

    const base64String = localStorage.getItem('image');

    const newImage = image == "" ? product.image : `data:image/png;base64,${base64String}`;

    const keys = [id, name, price, newImage, brand, description, createdAt];

    for (let key in product)
        product[key] = keys[i++];
    
    localStorage.setItem('products',JSON.stringify(products));
    document.querySelector('.admin-popup').classList.toggle('show');
    displayTable(state.products());
}

const updateProduct = () => {
    const editBtn = document.querySelectorAll('.btn-edit');
    const editForm = document.querySelector('.admin-popup');
    
    const products = state.products();
    editBtn.forEach((item) => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const index = state.products().findIndex(x => x.id == id);

            editForm.innerHTML = `<div class="edit-product-form">
                <form class="form-edit" id="${products[index].id}">
                    <div class="btn-close" onclick="togglePopupEdit()">
                        <i class="ri-close-line"></i>
                    </div>
                    <div class="admin-post-input">
                        <div class="admin-post-title">Post</div>
                        <label for="name">Product Name</label>
                        <input type="text" id="new_name" name="name" value="${products[index].name}">
                    </div>
                    <div class="admin-post-input">
                        <label for="price">Price</label>
                        <input type="text" id="new_price" name="price" value="${products[index].price}">
                    </div>
                    <div class="admin-post-input">
                        <label>Product Image</label>
                        <input onchange="handleImage('new_previewImg', 'new_image')" id="new_image" type="file" name="image">
                        <img onclick="openFile('new_previewImg', 'new_image')" src="${products[index].image}" alt="${products[index].name}" id="new_previewImg">
                    </div>
                    <div class="admin-post-input">
                        <label for="brand">Brand</label>
                        <select name="brand" id="new_brand" class="admin-input-select">
                            <option value="none" hidden selected disabled>Choose type brand</option>
                            <option value="converse">Converse</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="puma">Puma</option>
                            <option value="bata">Bata</option>
                            <option value="skechers">Skechers</option>
                            <option value="fila">Fila</option>
                        </select>
                    </div>
                    <div class="admin-post-input">
                        <label for="description">Description</label>
                        <textarea name="description" class="description" id="new_description" cols="30" rows="10">${products[index].description}</textarea>
                    </div>
                    <div class="btn-post">
                        <button type="button" id="btn-edit" onclick="
                            (function() {            
                                const name = document.getElementById('new_name').value;
                                const price = document.getElementById('new_price').value;
                                const brand = document.getElementById('new_brand').value;
                                const description = document.getElementById('new_description').value;
                                const image = document.getElementById('new_image').value;

                                editPost(${id}, name, price, image, brand, description);
                            })()"
                        >Save</button>
                    </div>
                </form>
            </div>`

            editForm.classList.toggle('show');
        }
    })
}

const searchProduct = () => {
    const search = document.querySelector('#search');
    const products = state.products();
    
    search.oninput = function(e) {
        const newProducts = products.filter(product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.id == e.target.value;
        })
        displayTable(newProducts);
        updateProduct();
        deleteProduct();
    }
}
const handleImage = (previewImg, filename) => {
    const image = document.getElementById(filename);
    const preview = document.getElementById(previewImg);

    image.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function(e) {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('image', base64String);
            preview.src = `data:image/png;base64,${base64String}`;
        }
        reader.readAsDataURL(file);
    }
}

const openFile = (previewImg, filename) => {
    const image = document.getElementById(filename);
    const preview = document.getElementById(previewImg);

    preview.onclick = () => {
        image.click();
    }
}

const togglePopupEdit = () => {
    document.querySelector('.admin-popup').classList.toggle('show');
}

const togglePopupDelete = () => {
    document.querySelector('.popup-delete-post').classList.toggle('show');
}

createProduct();
displayTable(state.products());
deleteProduct();
updateProduct();
searchProduct();

openFile('previewImg', 'image');
handleImage('previewImg', 'image');

formPost?.addEventListener('submit', addProduct);

