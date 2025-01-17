document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#007BFF';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc';
        });
    });
});
// Select the form and add a submit event listener
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    // Check for empty fields
    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Basic validation for password length (minimum 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Mock sign-up logic (you can replace this with actual backend integration)
    alert(`Sign-Up successful! Welcome, ${username}.`);
    // Redirect to a welcome page or login page
    window.location.href = "index.html";
});
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }
    if (username === "admin" && password === "password123") {
        alert('Login successful!');
        // Redirect to a dashboard or another page
        window.location.href = "index.html";
    } else {
        alert('Invalid username or password.');
    }
});
