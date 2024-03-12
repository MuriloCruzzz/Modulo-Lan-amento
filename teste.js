const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
    }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação de email e senha (implemente sua lógica de validação aqui)

    // Se a validação for bem-sucedida, faça o login do usuário

    // Se a validação falhar, exiba uma mensagem de erro

    console.log(`Email: ${email}`);
    console.log(`Senha: ${password}`);
});