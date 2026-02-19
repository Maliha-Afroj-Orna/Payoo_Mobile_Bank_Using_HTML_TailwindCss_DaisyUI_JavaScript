document.getElementById("cashout-btn").addEventListener("click", function () {
  // agent number
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;

  // amount
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;

  // pin
  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPin = cashoutPinInput.value;

  // main balance
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  // new balance
  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  if (cashoutNumber === "01234567890" && cashoutAmount.length !== 11) {
    if (cashoutPin === "1234") {
      alert("Cash Out Successful.");
      balanceElement.innerText = newBalance;
    } else {
      alert("Invalid Pin");
      return;
    }
  } else {
    alert("Invalid Mobile Number");
    return;
  }
});
