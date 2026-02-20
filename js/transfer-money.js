document.getElementById("transfer-btn").addEventListener("click", function () {
  // user acc number
  const transferNumber = getValueFromInput("transfer-number");
  // amount
  const transferAmount = getValueFromInput("transfer-amount");
  // pin
  const transferPin = getValueFromInput("transfer-pin");
  // main balance
  const currentBalance = getBalance();
  // new balance
  const newBalance = currentBalance - Number(transferAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  if (transferNumber.length === 11) {
    if (transferPin === "1234") {
      alert("Transfer Money Successful.");
      setBalance(newBalance);

      // Transaction history add
      const history = document.getElementById("history-container");
      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
<div class="transaction-card p-4 bg-base-100">
Transfer Money ${transferAmount} TAKA Successful to ${transferNumber} <br> 
at ${new Date()}
</div>
    `;

      history.appendChild(newHistory);
    } else {
      alert("Invalid Pin");
      return;
    }
  } else {
    alert("Invalid User Account Number");
    return;
  }
});

