(function() {
    let loggedin = JSON.parse(localStorage.getItem('loggedin'));

    if (!loggedin) return;

    window.location = "index.html";
})();

const register = (e) => {
    e.preventDefault();

    let formData = JSON.parse(localStorage.getItem('user')) || [];

    const id = Math.floor(new Date().valueOf() * Math.random());
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmpassword').value;

    if(password !== confirmPass) {
        addAlert('Password is not matching');
        return;
    }

    if(!name || !email || !password) {
        addAlert('One field is required');
        return;
    }

    formData.push({
        id: id,
        name: name,
        email: email,
        role: 'user',
        password: password,
        cart: []
    });

    let database = JSON.parse(localStorage.getItem('user'));

    let errors = 0;
    database?.forEach(data => {
        if (data.email == email) {
            addAlert("Email is in use");
            ++errors;
            return;
        }
    });

    if (errors > 0) return;

    localStorage.setItem('user', JSON.stringify(formData));

    addAlert("Register completed", "success");

    document.querySelector('form').reset();
}

const login = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        addAlert('Wrong email or password');
        return;
    }

    const data = {
        email: email,
        password: password
    }

    let formData = JSON.parse(localStorage.getItem('user'));

    if (!formData) {
        addAlert('Wrong email or password');
        return;
    }

    formData.forEach(data => {
        if(data.email == email && data.password == password) {
            localStorage.setItem('loggedin', JSON.stringify(data));
            window.location = 'index.html';
        } else {
            addAlert('Wrong email or password');
        }
    });
}

const formLogin = document.querySelector('#form-login');
const formRegister = document.querySelector('#form-register');
formLogin?.addEventListener('submit', login);
formRegister?.addEventListener('submit', register);
