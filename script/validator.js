function Validator(options) {
    const formElement = document.querySelector(options.form);

    const validate = (inputElement, rule) => {
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        let errorMessage = rule.test(inputElement.value);

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    if(formElement) {
        options.rules.forEach(rule => {
            const inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                inputElement.onblur = () => validate(inputElement, rule);
                inputElement.oninput = () => {
                    let errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này yêu cầu email';
        }
    }
}
Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} chữ số`;
        }
    }
}
Validator.confirmPassword = (selector, getPassword, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value === getPassword() ? undefined : message || 'Mật khẩu nhập vào không chính xác';
        }
    }
}