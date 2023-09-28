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
  .getElementById("send-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("fillout-false").style.display = "none";
    document.getElementById("fillout-true").style.display = "block";
    let nameInputValue = document.getElementById("name-send").value;
    let amountInputValue = parseFloat(
      document.getElementById("amount-send").value
    );
    if (amountInputValue > storedCurrentBankBalance) {
      alert("Cannot send more than you have");
      document.getElementById("fillout-false").style.display = "block";
      document.getElementById("fillout-true").style.display = "none";
    }
    sendCount = JSON.parse(localStorage.getItem("sendCount"));
    currentBankBalance = storedCurrentBankBalance - amountInputValue;
    localStorage.setItem("currentBankBalance", currentBankBalance.toString());
    document.getElementById("amount-transferred").innerText =
      "Amount Transferred: £" + amountInputValue;
    document.getElementById("transaction-name").innerText =
      "Transaction Name: " + nameInputValue;
    sendCount += 1;
    localStorage.setItem("sendCount", JSON.stringify(sendCount));

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
