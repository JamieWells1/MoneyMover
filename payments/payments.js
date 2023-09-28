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
  .getElementById("amount-form-receive")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("fillout-false").style.display = "none";
    document.getElementById("fillout-true").style.display = "block";
    let nameInputValue = document.getElementById("name-input-receive").value;
    let amountInputValue = parseFloat(
      document.getElementById("amount-input-receive").value
    );
    if (amountInputValue > 10000) {
      alert("Cannot send more than £10000");
      document.getElementById("fillout-false").style.display = "block";
      document.getElementById("fillout-true").style.display = "none";
    }

    receiveCount = JSON.parse(localStorage.getItem("receiveCount"));
    currentBankBalance = storedCurrentBankBalance + amountInputValue;
    localStorage.setItem("currentBankBalance", currentBankBalance.toString());
    document.getElementById("amount-transferred").innerText =
      "Amount Transferred: £" + amountInputValue;
    document.getElementById("transaction-name").innerText =
      "Transaction Name: " + nameInputValue;
    receiveCount += 1;
    localStorage.setItem("receiveCount", JSON.stringify(receiveCount));

    let growthDataForCalculations =
      JSON.parse(localStorage.getItem("growthDataForCalculations")) || [];

    let lineData = JSON.parse(localStorage.getItem("lineData")) || [];
    growthDataForCalculations.push(currentBankBalance);
    localStorage.setItem(
      "growthDataForCalculations",
      JSON.stringify(growthDataForCalculations)
    );
    lineData.push(currentBankBalance);
    localStorage.setItem("lineData", JSON.stringify(lineData));
  });
