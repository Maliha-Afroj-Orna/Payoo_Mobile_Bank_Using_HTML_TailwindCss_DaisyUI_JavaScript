document.getElementById("pay-bill-btn").addEventListener("click", function () {
  // bank
  const bankName = getValueFromInput("pay-bill-bank");
  // bank acc number
  const bankAccountNumber = getValueFromInput("pay-bill-acc-number");
  // ammount to pay
  const amountPay = getValueFromInput("pay-bill-amount");
  // pin
  const pin = getValueFromInput("pay-bill-pin");
  // main balance
  const balance = getBalance();
  // new balance
  const newBalance = balance - Number(amountPay);

  if (bankName === "Select a bank") {
    alert("Please select a bank.");
    return;
  }
  if (bankAccountNumber.length !== 11) {
    alert("Invalid bank account number");
    return;
  }
  if (pin !== "1234") {
    alert("Invalid Pin Number");
    return;
  }

  if (
    bankName !== "Select a bank" &&
    bankAccountNumber.length === 11 &&
    pin === "1234"
  ) {
    alert(`Pay Bill Successful from ${bankName}
at ${new Date()}`);
    setBalance(newBalance);

    // Transaction history add
    const history = document.getElementById("history-container");
    const newHistory = document.createElement("div");

    newHistory.innerHTML = `
<div class="transaction-card p-4 bg-base-100">
Pay Bill Successful from ${bankName} <br> 
Acc No ${bankAccountNumber} <br>
at ${new Date()}
</div>
    `;

    history.appendChild(newHistory);
  }
});
