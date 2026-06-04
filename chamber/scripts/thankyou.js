const params =
new URLSearchParams(window.location.search);

document.getElementById("fname").textContent =
params.get("firstname");

document.getElementById("lname").textContent =
params.get("lastname");

document.getElementById("email").textContent =
params.get("email");

document.getElementById("phone").textContent =
params.get("phone");

document.getElementById("org").textContent =
params.get("organization");

document.getElementById("time").textContent =
params.get("timestamp");
