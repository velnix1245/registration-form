
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.className = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    message.textContent = 'Будь ласка, заповніть усі поля.';
    message.className = 'error';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = 'Введіть коректну електронну адресу.';
    message.className = 'error';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Пароль повинен містити щонайменше 6 символів.';
    message.className = 'error';
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Паролі не збігаються. Спробуйте ще раз.';
    message.className = 'error';
    return;
  }

  message.textContent = 'Реєстрацію успішно виконано!';
  message.className = 'success';
});

document.querySelectorAll('.toggle-password').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.target);
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    button.textContent = visible ? 'Приховати' : 'Показати';
    button.setAttribute('aria-pressed', String(visible));
  });
});
