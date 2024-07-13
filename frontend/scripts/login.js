const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const passwordIcon = document.querySelectorAll(".password__icon");
const authPassword = document.querySelectorAll(".auth__password");

// al hacer click en sing up
signUp.addEventListener("click", () => {
  document.querySelector(".login__form").classList.remove("active");
  document.querySelector(".register__form").classList.add("active");
  document.querySelector(".ball").classList.add("register");
  document.querySelector(".ball").classList.remove("login");
});

// al hacer click en sing in
signIn.addEventListener("click", () => {
  document.querySelector(".login__form").classList.add("active");
  document.querySelector(".register__form").classList.remove("active");
  document.querySelector(".ball").classList.add("login");
  document.querySelector(".ball").classList.remove("register");
});

// cambiar de password oculta a visible
for (var i = 0; i < passwordIcon.length; ++i) {
  passwordIcon[i].addEventListener("click", (i) => {
    const lastArray = i.target.classList.length - 1;
    if (i.target.classList[lastArray] == "bi-eye-slash") {
      i.target.classList.remove("bi-eye-slash");
      i.target.classList.add("bi-eye");
      i.currentTarget.parentNode.querySelector("input").type = "text";
    } else {
      i.target.classList.add("bi-eye-slash");
      i.target.classList.remove("bi-eye");
      i.currentTarget.parentNode.querySelector("input").type = "password";
    }
  });
}

const loginForm = document.getElementById("session_login_form");
const registerForm = document.getElementById("user_registration_form");

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new URLSearchParams();
  formData.append("username", registerForm.username.value);
  formData.append("email", registerForm.email.value);
  formData.append("password", registerForm.password.value);

  const requestData = {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  fetch("http://localhost:3000/usuarios/", requestData).then((response) => {
    if (!response.ok) {
      // hacer algo
    }
  });
});

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new URLSearchParams();
  formData.append("email", loginForm.email.value);
  formData.append("password", loginForm.password.value);

  const requestData = {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  fetch("http://localhost:3000/usuarios/signin", requestData).then(
    (response) => {
      if (!response.ok) {
        // hacer algo
        alert("Credenciales invalidas");
      }
    }
  );
});
