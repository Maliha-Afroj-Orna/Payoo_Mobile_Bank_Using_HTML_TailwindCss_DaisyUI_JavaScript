document.getElementById('bonus-btn').addEventListener('click', function() {
    // bonus coupon
    const bonusCoupon = getValueFromInput('bonus-coupon');

    // new Balance
    const newBalance = getBalance() + 500;

    if(bonusCoupon === '1234') {
        alert('Get Bonus Successful');
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
    }
    else {
        alert('Invalid Coupon!');
    }
})