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
  const cashAgentNumber = document.getElementById('cashAgentNumber').value;
  const cashAmountIs = document.getElementById('cashOutAmount').value;
  const cashAmount = parseFloat(cashAmountIs);
  const cashPin = document.getElementById('cashOutPin').value;
  const cashRemaining = cashOutBalance - cashAmount + ' USD';


  if( cashAgentNumber === '12345' && cashPin === '2025' ){
    document.getElementById('cashOutBalance').innerText = cashRemaining;
    
  }
  else{
    alert('Wrong Number And Pass')
  }

})