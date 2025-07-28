
function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `Username: user 1, Email:{user email.1} `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteUser(index);

    li.appendChild(deleteBtn);
    userList.appendChild(li);
  });
}

function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  users.splice(index, 1); // Remove user at the given index
  localStorage.setItem("users", JSON.stringify(users));
  loadUsers(); // Refresh the list
 alert("User deleted!");
}

window.onload = loadUsers;
