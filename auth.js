
function generateUserCode() {
  return 'GM-' + Math.floor(1000 + Math.random() * 9000);
}
function createAccount(event) {
  event.preventDefault(); 
  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("number").value.trim();
  const number = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

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
  alert("Account created successfully! Please keep this code as it will be used for all future activities. Your unique Gold Miner code is:  " + userCode );
  window.location.href = "login.html"; 
}

// Check user login
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.username === username && u.password === password);
  if (user) {
    alert("Login successful! Welcome " + user.username);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "task.html"; // redirect on success
  } else {
    alert("Invalid username or password");
  }
}
