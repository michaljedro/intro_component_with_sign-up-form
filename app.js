const firstname = document.querySelector('#fname');
const lastname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const sendBtn = document.querySelector('.form__button--style');


const showError = (input) => {
    const box = input.parentElement;
    const errorMsg = box.querySelector('.form__box--error');
    errorMsg.classList.add('error');

}
const clearError = input => {
    const box = input.parentElement;
    const errorMsg = box.querySelector('.form__box--error');
    errorMsg.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el)
        } else {
            clearError(el)
        }
    })
}
const checkEmail = mail =>{ 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(mail.value)) {
        clearError(mail)
    } else {
        showError(mail)
    }
}

sendBtn.addEventListener('click', e=> {
    e.preventDefault();
    checkForm([firstname, lastname, email,password]);
    checkEmail(email);
})


