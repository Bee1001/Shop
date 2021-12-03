const formPost = document.querySelector('.form-post');

function createProduct() {
    const products = JSON.parse(localStorage.getItem('products')) ||
    [
        {
            "id":1282406738503,
            "name":"Nike Blazer Mid",
            "price":"9.230.000",
            "image":"./images/blog-1.jpg",
            "brand":"nike",
            "description":"giay rat dep",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023127358,
            "name":"Giày Supernova+",
            "price":"10.000.000",
            "image":"./images/blog-15.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },

        {
            "id":509840079795,
            "name":"Nike Blazer Mid '77 Vintage",
            "price":"2.300.000",
            "image":"./images/blog-4.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":509840079125,
            "name":"Nike React Live",
            "price":"2.300.000",
            "image":"./images/blog-5.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840079125,
            "name":"Nike React Infinity Run Flyknit",
            "price":"3.490.000",
            "image":"./images/blog-6.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587312,
            "name":"Giày Stan Smith",
            "price":"1.400.000",
            "image":"./images/blog-13.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023582358,
            "name":"Adidas SUPERSTAR W",
            "price":"4.300.000",
            "image":"./images/blog-16.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1109760050951,
            "name":"Converse Cons Mi Gente CX Hi-Top ",
            "price":"2.100.000",
            "image":"./images/blog-38.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840079125,
            "name":"Nike Air Jordan 11 Retro",
            "price":"3.000.000",
            "image":"./images/blog-7.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840023125,
            "name":"Nike Air Vapormax 2021 FK",
            "price":"2.000.000",
            "image":"./images/blog-8.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":122840023125,
            "name":"Nike Blazer '77",
            "price":"2.100.000",
            "image":"./images/blog-9.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":122840023125,
            "name":"LeBron Witness 6",
            "price":"5.000.000",
            "image":"./images/blog-10.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587358,
            "name":"Adidas Forum 84 Hi Marvel",
            "price":"8.560.000",
            "image":"./images/blog-11.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587359,
            "name":"Adidas UltraBoost 21",
            "price":"5.900.000",
            "image":"./images/blog-12.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"2021-11-03T12:45:00.596Z"
        },
        {
            "id":342323587358,
            "name":"Adidas Superstar",
            "price":"3.200.000",
            "image":"./images/blog-17.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349028787358,
            "name":"Adidas Ultrarange Exo Carbon",
            "price":"9.000.000",
            "image":"./images/blog-18.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1099768650121,
            "name":"Converse Chuck Taylor All Star CX Create Next Comfort",
            "price":"6.000.000",
            "image":"./images/blog-33.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1009738650151,
            "name":"Converse Chuck Taylor All Star CX Create Next Comfort",
            "price":"4.500.000",
            "image":"./images/blog-35.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349028787358,
            "name":"ADIDAS ULTRABOOST DNA X LEGO® COLORS",
            "price":"3.900.000",
            "image":"./images/blog-20.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349073587358,
            "name":"Vans Men's White Classic Slip-on Black",
            "price":"5.200.000",
            "image":"./images/blog-21.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023583758,
            "name":"Vans Old Skool Platform Pastel",
            "price":"8.100.000",
            "image":"./images/blog-22.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":3490200587358,
            "name":"Vans Old Skool Sneakers - Blue",
            "price":"4.900.000",
            "image":"./images/blog-23.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1009738651121,
            "name":"Converse Black Chuck 70 Hi Sneakers",
            "price":"5.500.000",
            "image":"./images/blog-31.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1275979804086,
            "name":"Nike RevolutionNike",
            "price":"4.300.000",
            "image":"./images/blog-2.jpg",
            "brand":"nike",
            "description":"giay rat dep",
            "createdAt":"20/11/2021"
        },
        {
            "id":509844779795,
            "name":"Nike Air Max",
            "price":"3.000.000",
            "image":"./images/blog-3.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":2079738651121,
            "name":"Converse Black Chuck Sneakers",
            "price":"5.200.000",
            "image":"./images/blog-32.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":2109738650951,
            "name":"Converse Chuck 70 Great Next Purpose: Mi Gente Low Top",
            "price":"2.100.000",
            "image":"./images/blog-36.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":3209767650951,
            "name":"Converse Cons Weapon CX Hi-Top [Limited Edition]",
            "price":"2.000.000",
            "image":"./images/blog-37.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1191760350951,
            "name":"Converse Cons Mi Gente Taylor All Star",
            "price":"3.000.000",
            "image":"./images/blog-39.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
    ]


    localStorage.setItem('products', JSON.stringify(products));
}

const state = {
    'products': () => { return JSON.parse(localStorage.getItem('products')) },
    'page': 1,
    'rows': 6
}

function pagination(products, page, rows) {
    let start = (page - 1) * rows;
    let end = start + rows;
    let data = products.slice(start, end);

    let pages = Math.ceil(products.length / rows);

    return {
        'products': data,
        'pages': pages
    }
}

function handlePageButtons(pages, products) {
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

function displayTable(products) {
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
                    <td>${product.price} ₫</td>
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
function addProduct(e) {
    e.preventDefault();

    const formData = state.products() || [];
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const brand = document.getElementById('brand').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const id = Math.floor(new Date().valueOf() * Math.random());

    if(!name || !price || !brand || !description || !image) {
        toastr.error("One field is required");
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
    toastr.success("Your product was created");

    formPost.reset();
    displayTable(state.products());
}

function deleteProduct() {
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
                const filtered = products.filter(product => product.id != id);

                localStorage.setItem('products', JSON.stringify(filtered));
                displayTable(state.products());
            }
        }
    })
}

function editPost(id, name, price, image, brand, description) {
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

function updateProduct() {
    const editBtn = document.querySelectorAll('.btn-edit');
    const editForm = document.querySelector('.admin-popup');

    editBtn.forEach((item) => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const product = state.products().find(product => product.id == id);

            editForm.innerHTML = `<div class="edit-product-form">
                <form class="form-edit" id="${product.id}">
                    <div class="btn-close" onclick="togglePopupEdit()">
                        <i class="ri-close-line"></i>
                    </div>
                    <div class="admin-post-input">
                        <div class="admin-post-title">Post</div>
                        <label for="name">Product Name</label>
                        <input type="text" id="new_name" name="name" value="${product.name}">
                    </div>
                    <div class="admin-post-input">
                        <label for="price">Price</label>
                        <input type="text" id="new_price" name="price" value="${product.price}">
                    </div>
                    <div class="admin-post-input">
                        <label>Product Image</label>
                        <input onchange="handleImage('new_previewImg', 'new_image')" onclick="this.value = null" id="new_image" type="file" name="image">
                        <img onclick="openFile('new_previewImg', 'new_image')" src="${product.image}" alt="${product.name}" id="new_previewImg">
                    </div>
                    <div class="admin-post-input">
                        <label for="brand">Brand</label>
                        <select name="brand" id="new_brand" class="admin-input-select">
                            <option value="none" hidden selected disabled>Choose type brand</option>
                            <option value="converse">Converse</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="vans">Vans</option>
                        </select>
                    </div>
                    <div class="admin-post-input">
                        <label for="description">Description</label>
                        <textarea name="description" class="description" id="new_description" cols="30" rows="10">${product.description}</textarea>
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

function searchProduct() {
    const search = document.querySelector('#search');

    search.oninput = function(e) {
        const products = state.products();
        const newProducts = products.filter(product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.brand.includes(e.target.value.toLowerCase()) ||
            product.id == e.target.value;
        })
        displayTable(newProducts);
        deleteProduct();
        updateProduct();
    }
}
function handleImage(previewImg, filename) {
    const image = document.getElementById(filename);
    const preview = document.getElementById(previewImg);

    image.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function() {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('image', base64String);
            preview.src = `data:image/png;base64,${base64String}`;
        }
        reader.readAsDataURL(file);
    }
}

function openFile(previewImg, filename) {
    const image = document.getElementById(filename);
    const preview = document.getElementById(previewImg);

    preview.onclick = () => {
        image.click();
    }
}

function togglePopupEdit() {
    document.querySelector('.admin-popup').classList.toggle('show');
}

function togglePopupDelete() {
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
