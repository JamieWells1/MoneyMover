//----------------------------------- Function for creating sidebar tabs -------------------------------------

let currentBankBalance = 0;
let currentCashBalance = 0;

if (localStorage.length > 0) {
  var storedCurrentBankBalance = parseFloat(
    localStorage.getItem("currentBankBalance") || 0
  );

  // Update the currentBankBalance variable with the value from localStorage
  currentBankBalance = storedCurrentBankBalance;

  document.querySelector(".bank-balance").querySelector("p").innerText =
    currentBankBalance;

  var storedCurrentCashBalance = parseFloat(
    localStorage.getItem("currentCashBalance") || 0
  );

  currentCashBalance = storedCurrentCashBalance;

  document.querySelector(".cash-balance").querySelector("p").innerText =
    currentCashBalance;
} else {
  function setBalance() {
    localStorage.setItem("currentBankBalance", currentBankBalance.toString());
    document.querySelector(".bank-balance").querySelector("p").innerText =
      currentBankBalance;

    localStorage.setItem("currentCashBalance", currentCashBalance.toString());
    document.querySelector(".cash-balance").querySelector("p").innerText =
      currentCashBalance;
  }
  setBalance();
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
});

document.querySelector(".bank-balance").querySelector("p").innerText =
  "£" + currentBankBalance;
document.querySelector(".cash-balance").querySelector("p").innerText =
  "£" + currentCashBalance;

// Taking user to different page based on what payment option they choose

function receivePaymentRedirect() {
  window.location.href = "payments/receive-payment.html";
}

function sendPaymentRedirect() {
  window.location.href = "payments/send-payment.html";
}

function depositRedirect() {
  window.location.href = "cash/deposit.html";
}

function withdrawRedirect() {
  window.location.href = "cash/withdraw.html";
}
