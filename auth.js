
function generateUserCode() {
  return 'ES-' + Math.floor(1000 + Math.random() * 9000);
}
function createAccount(event) {
  event.preventDefault(); 
  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("phonenumber").value.trim();
  const password = document.getElementById("inputpassword").value.trim();

  if (!username || !email || !fullname || !number || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(user => user.email === email)) {
    alert("Email already registered");
    return;
  }

  const userCode = generateUserCode();

  users.push({ fullname, username, number, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created successfully! Please keep this code as it will be used for all future activities Your unique E-socialites code is:  " + userCode );
  window.location.href = "login.html"; 
}

// Check user login
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("input password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert("Login successful! Welcome " + user.username);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html"; // redirect on success
  } else {
    alert("Invalid email or password");
  }
}