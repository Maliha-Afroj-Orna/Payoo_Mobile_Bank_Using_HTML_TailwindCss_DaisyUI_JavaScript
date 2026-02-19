// machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

// machine value -> set balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
