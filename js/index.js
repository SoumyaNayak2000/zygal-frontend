let btn = document.getElementById('btn');
btn.addEventListener("click", (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  console.log(email,password);

  const handleLogin = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      email: email,
      password: password,
    });

    let response = await fetch("https://zygalbackend.onrender.com/api/v1/user/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let res = await response.json();

    console.log(res);

        if (response.ok) {

        // Redirect to page 2 on successful login
        window.location.href = "page2.html";
      } else {
        alert('Invalid credentials');
      }
  }

  handleLogin();
})
