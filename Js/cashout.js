document.getElementById('btnLogout').addEventListener('click',function(){
  window.location.href = "../Html/login.html"
})

document.getElementById('addMoney').addEventListener('click', function(){
  window.location.href = '../Html/addmoney.html';
})
document.getElementById('cashOut').addEventListener('click', function(){
  window.location.href = '../Html/cashout.html';
})
document.getElementById('transferMoney').addEventListener('click', function(){
  window.location.href = '../Html/transfermoney.html';
})
document.getElementById('getBonus').addEventListener('click', function(){
  window.location.href = '../Html/getbonus.html';
})
document.getElementById('payBill').addEventListener('click', function(){
  window.location.href = '../Html/paybill.html';
})
document.getElementById('transaction').addEventListener('click', function(){
  window.location.href = '../Html/transaction.html';
})



// * Function start here 

document.getElementById('btnCashOut').addEventListener('click',function(){
  const cashOutBalanceIs = document.getElementById('cashOutBalance').innerText;
  const cashOutBalance = parseFloat(cashOutBalanceIs);
  const cashAgentName = document.getElementById('cashAgentNumber').value;
  const cashAmount = document.getElementById('cashOutAmount').value;
  const cashPin = document.getElementById('cashOutPin').value;
  console.log(cashOutBalance,cashAgentName,cashAmount,cashPin);

})