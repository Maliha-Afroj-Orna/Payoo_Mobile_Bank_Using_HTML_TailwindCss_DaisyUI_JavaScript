document.getElementById("login-btn").addEventListener("click", function () {
  // input number
  const inputNumber = document.getElementById("input-number");
  const inputNumberValue = inputNumber.value;

  // input pin
  const inputPin = document.getElementById("input-pin");
  const inputPinValue = inputPin.value;

  if (inputNumberValue == "01234567890" && inputPinValue == "1234") {
    alert("Login Successful!");
    window.location.assign("/home.html");
  } else {
    alert("Login Failed. Invalid Mobile Number or Pin!");
    return;
  }
});
