const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const loginBox = document.querySelector(".login_box");
const signupBox = document.querySelector(".signup_box");
const slider = document.getElementById("slider");
signupBox.classList.add("hidden")
signupBtn.addEventListener("click", () => {
  loginBox.classList.add("hidden");    // hide login form
  signupBox.classList.remove("hidden"); // show signup form
  slider.classList.add("movesslider");  // move slider
});

loginBtn.addEventListener("click", () => {
  signupBox.classList.add("hidden");   // hide signup form
  loginBox.classList.remove("hidden"); // show login form
  slider.classList.remove("movesslider"); // move slider back
});
