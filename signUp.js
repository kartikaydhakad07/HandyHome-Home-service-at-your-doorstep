async function registerUser(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password1').value;
    const password2 = document.getElementById('password').value;
    const termsAccepted = document.querySelector(".policy input").checked;
  
    if (!name || name.length < 2) {
        alert("Please enter a valid name (at least 2 characters).");
        return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
  
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return;
    }
  
    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }
  
    if (password !== password2) {
        alert("Passwords do not match.");
        return;
    }
  
    const response = await fetch('http://127.0.0.1:4000/register/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    });
  
    const result = await response.json();
    alert(result.message);
  
    if (response.ok) {
        window.location.href = './login.html';
    }
  }
  