const password = document.getElementById('password')
const visibilityToggle = document.getElementById('togglePassword')
const eye = document.getElementById('eye')
console.log(eye)

visibilityToggle.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type)
    if (password.getAttribute('type') === 'password') {
        eye.src = './img/visibility_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
    } else {
        eye.src = './img/visibility_off_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
    }
    // visibilityToggle.classList.toggle('fa-eye-slash')
})