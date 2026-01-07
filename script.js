// Registration
function register(){
 let name = document.getElementById("regName").value;
 let email = document.getElementById("regEmail").value;
 let pass = document.getElementById("regPass").value;

 if(!name || !email || !pass){
  alert("Fill all fields");
  return;
 }

 let users = JSON.parse(localStorage.getItem("users")) || [];
 users.push({name,email,pass});
 localStorage.setItem("users", JSON.stringify(users));

 alert("Registration successful");
 window.location="index.html";
}

// Login
function login(){
 let email = document.getElementById("loginEmail").value;
 let pass = document.getElementById("loginPass").value;

 let users = JSON.parse(localStorage.getItem("users")) || [];
 let user = users.find(u => u.email === email && u.pass === pass);

 if(user){
  localStorage.setItem("loggedUser", user.name);
  window.location="dashboard.html";
 } else {
  alert("Invalid credentials");
 }
}

// Dashboard
if(document.getElementById("welcome")){
 let name = localStorage.getItem("loggedUser");
 if(!name){
  window.location="index.html";
 }
 document.getElementById("welcome").innerText = "Welcome, " + name;
}

// Logout
function logout(){
 localStorage.removeItem("loggedUser");
 window.location="index.html";
}
