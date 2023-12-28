const form = document.getElementById('form');
const courriel = document.getElementById('courriel');
const email_confirm = document.getElementById('email_confirm');

function emailValidation() {
    if (form.email.value !== form.email_confirm.value) {
        courriel.classList.remove("d-none");
        courriel.classList.add("d-block");
        email_confirm.classList.add("alert")
    } else {
        courriel.classList.remove("d-block");
        courriel.classList.add("d-none");
        email_confirm.classList.remove("alert")
    }
};

window.onload = emailValidation;