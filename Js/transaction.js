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
document.getElementById('viewBtnTrans').addEventListener('click', function(){
  alert('No More Transaction Found');
})