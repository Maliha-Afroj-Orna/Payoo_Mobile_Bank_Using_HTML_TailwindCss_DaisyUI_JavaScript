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

// machine id -> hide all -> show id
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transaction = document.getElementById("history");

  // hide all
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transaction.classList.add("hidden");

  // show id
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
