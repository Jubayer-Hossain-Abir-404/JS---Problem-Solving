// for the login

document.getElementById("loginButton").addEventListener('click', function(){
    const email = document.getElementById("userEmail");
    const pass = document.getElementById("userPasswword");

    if(email.value=="user@gmail.com" && pass.value == "1234"){
        window.location.href = "practice_banking.html";
    }
});