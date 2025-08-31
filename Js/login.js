document.getElementById('login-btn').addEventListener('click', function(){
const mobileNumber = document.getElementById('input-mobile').value;
const pinNumber = document.getElementById('input-pin').value;
console.log(mobileNumber, pinNumber)

if(mobileNumber==='12345' && pinNumber==='2025'){
console.log('Successfully Logged in.')
window.location.href = '../Html/home.html';
}
else{
  alert('Ooopss..! Login Failed, Provide correct info')
}

});