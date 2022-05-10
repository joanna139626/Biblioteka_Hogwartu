const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendButton = document.querySelector('.send');
const clearButton = document.querySelector('.clear');
const popup = document.querySelector('.popup')

const addError = (input, message) => {
    let formBox = input.parentElement;
    let ErrorWrapper = formBox.querySelector('.error-wrapper');

    formBox.classList.add('error');
    ErrorWrapper.textContent = message;
}

const clearError = (input) => {
    let formBox = input.parentElement;
    let ErrorWrapper = formBox.querySelector('.error-wrapper');

    formBox.classList.remove('error');
    ErrorWrapper.textContent = '';
}

const removeFormErrors = inputs => {
    inputs.forEach(input => {
        const formBox = input.parentElement;
        if(formBox.classList.contains("error")){
            clearError(input);
        }
    });
};

const checkLength = (input, min) => {
    if (input.value.length < min) {
        addError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        addError(pass2, 'Hasła do siebie nie pasują.')
    }
}

const checkEmail = inputEmail => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(inputEmail.value)) {
        clearError(inputEmail)
    } else {
        addError(inputEmail, 'E-mail jest niepoprawny')
    }
}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup')
    }
}


sendButton.addEventListener('click', e => {
    e.preventDefault();
 
    removeFormErrors([username, pass, pass2, email])
    checkLength(username, 3);
    checkLength(pass, 8);
    checkPassword(pass, pass2)
    checkEmail(email);
    checkErrors()

})

clearButton.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(input => {
        input.value = ''
        clearError(input)
    })
})


