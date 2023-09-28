let storedCurrentCashBalance = parseFloat(
  localStorage.getItem("currentCashBalance")
);

// Check if storedCurrentCashBalance is NaN or undefined (not found in localStorage)
if (isNaN(storedCurrentCashBalance) || storedCurrentCashBalance === null) {
  // Set it to 0
  storedCurrentCashBalance = 0;
  localStorage.setItem(
    "currentCashBalance",
    storedCurrentCashBalance.toString()
  );
}

let storedCurrentBankBalance = parseFloat(
  localStorage.getItem("currentBankBalance")
);

// Check if storedCurrentBankBalance is NaN or undefined (not found in localStorage)
if (isNaN(storedCurrentBankBalance) || storedCurrentBankBalance === null) {
  // Set it to 0
  storedCurrentBankBalance = 0;
  localStorage.setItem(
    "currentBankBalance",
    storedCurrentBankBalance.toString()
  );
}

document
  .getElementById("withdraw-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("fillout-false").style.display = "none";
    document.getElementById("fillout-true").style.display = "block";
    let nameInputValue = document.getElementById("name-withdraw").value;
    let amountInputValue = parseFloat(
      document.getElementById("amount-withdraw").value
    );

    if (amountInputValue < 0) {
      alert("Input cannot be less than 0");
      document.getElementById("fillout-false").style.display = "block";
      document.getElementById("fillout-true").style.display = "none";
    } else {
      if (amountInputValue > storedCurrentBankBalance) {
        alert("Cannot withdraw more than you have");
        document.getElementById("fillout-false").style.display = "block";
        document.getElementById("fillout-true").style.display = "none";
      } else {
        currentCashBalance = storedCurrentCashBalance + amountInputValue;
        currentBankBalance = storedCurrentBankBalance - amountInputValue;
        localStorage.setItem(
          "currentCashBalance",
          currentCashBalance.toString()
        );
        localStorage.setItem(
          "currentBankBalance",
          currentBankBalance.toString()
        );
        document.getElementById("amount-transferred").innerText =
          "Amount Transferred: £" + amountInputValue;
        document.getElementById("transaction-name").innerText =
          "Transaction Name: " + nameInputValue;

        withdrawCount = JSON.parse(localStorage.getItem("withdrawCount"));
        withdrawCount += 1;
        localStorage.setItem("withdrawCount", JSON.stringify(withdrawCount));
      }
    }
  });
