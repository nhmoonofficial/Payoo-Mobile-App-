document.getElementById("btnLogout").addEventListener("click", function () {
  window.location.href = "../Html/login.html";
});

document.getElementById("addMoney").addEventListener("click", function () {
  window.location.href = "../Html/addmoney.html";
});
document.getElementById("cashOut").addEventListener("click", function () {
  window.location.href = "../Html/cashout.html";
});
document.getElementById("transferMoney").addEventListener("click", function () {
  window.location.href = "../Html/transfermoney.html";
});
document.getElementById("getBonus").addEventListener("click", function () {
  window.location.href = "../Html/getbonus.html";
});
document.getElementById("payBill").addEventListener("click", function () {
  window.location.href = "../Html/paybill.html";
});
document.getElementById("transaction").addEventListener("click", function () {
  window.location.href = "../Html/transaction.html";
});

// * Main Functional works start here

document.getElementById("btnAddMoney").addEventListener("click", function () {
  const accountNumber = document.getElementById("accountNumberAdd").value;
  const pinNumber = document.getElementById("pinNumberAdd").value;

  const addAmount = document.getElementById("amountAdd").value;
  const newAmounts = document.getElementById("balance").innerText;
  const newBalance = addAmount + newAmounts;
  console.log(newBalance);

  if (accountNumber === "12345" && pinNumber === "2025") {
    (document.getElementById("balance").innerText = newBalance), "USD";
  } 
  
  
  else {
    alert("please provide your own info not others");
  }
});
