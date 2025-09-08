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


// * main function will start here

document.getElementById('btnCashOut').addEventListener('click', function(){

const trnsBalanceIs = document.getElementById('trnsBalance').innerText;
const trnsBalance = parseFloat(trnsBalanceIs);

const trnsUserNumber = document.getElementById('trnsUserNumber').value;
const trnsAmountIs =  document.getElementById('trnsAmount').value;
const trnsAmount = parseFloat(trnsAmountIs);
const trnsPin = document.getElementById('trnsPin').value;

const trnsNewBalanceIs = trnsBalance - trnsAmount ;
console.log(trnsNewBalanceIs);

if(trnsUserNumber === '12345' && trnsPin === '2025'){
  document.getElementById('trnsBalance').innerText = trnsNewBalanceIs + ' USD';
}

else{
  alert('please provide correct info')
}

})