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

// * function start here

document.getElementById("btnBonus").addEventListener("click", function () {
  const gbBalanceIs = document.getElementById("gbBalances").innerText;
  const gbBalance = parseFloat(gbBalanceIs);
  console.log(gbBalance);

  const gbCouponIs = document.getElementById("gbCoupon").value;
  const fstBouns = 12345;
  const scndBonus = 1234;
  const lastBonus = 123;

  if (gbCouponIs === "12345") {
    document.getElementById("gbBalance").innerText = gbBalance + fstBouns;
    console.log(gbBalance);
  } else if (gbCouponIs === "1234") {
    document.getElementById("gbBalance").innerText = gbBalance + scndBonus;
    console.log(gbBalance);
  } else if (gbCouponIs === "123") {
    document.getElementById("gbBalance").innerText = gbBalance + lastBonus;
    console.log(gbBalance);
  } else {
    alert("hello noob");
  }
});
