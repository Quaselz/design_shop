let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("name");
  let email = document.getElementById("email");

  if (username.value == "" || email.value == "") {
  } else {
    
    console.log(
      `This form has a name of ${username.value} and email of ${email.value}`
    );

    username.value = "";
    email.value = "";
  }
});
