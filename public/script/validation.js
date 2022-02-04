const form = document.querySelector ('#form-register')
const leadName = document.querySelector ('#lead_name')
const email = document.querySelector ('#email')
const subject = document.querySelector ('#lead_subject')
const messenge = document.querySelector ('#messenge')

const errorLeadName = document.querySelector ('.error-lead_name')
const errorMessenge = document.querySelector ('.error-messenge')
const errorSubject = document.querySelector ('.error-lead_subject')
const errorEmail = document.querySelector ('.error-email')
const errorsMessage = document.querySelectorAll ('.field-feedback')

function resetErrors () {
    errorsMessage.forEach (errorMessage => {
        errorMessage.style.display = "none"
    })
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener ('submit', function (e) {
    let errors = false

    resetErrors ()

    if (leadName.value.length < 2) {
        errorLeadName.innerText = "Su nombre debe tener al menos 2 caracteres"
        errorLeadName.style.display = "block"
        errors = true
    }

    if (subject.isEmpty()) {
        errorSubject.innerText = "no eligio un motivo"
        errorSubject.style.display = "block"
        errors = true
    }

    if (!validateEmail (email.value)) {
        errorEmail.innerText = "Ingresa un email valido"
        errorEmail.style.display = "block"
        errors = true
    }

    if (messenge.value.length < 6 || messenge.value.length >12) {
        errorMessenge.innerText = "Ingresa una contraseña entre 6 y 12 caracteres"
        errorMessenge.style.display = "block"
        errors = true
    }
    
    if (errors) {
        e.preventDefault()
    }

})