// for the deposit button

document.getElementById("depositButton").addEventListener('click', function(){
    // taking deposit input

    const depositInput = document.getElementById("depositInput");
    const newDepositAmount = parseFloat(depositInput.value);

    const depositAmount = document.getElementById("depositAmount");
    const previousDepositAmount = parseFloat(depositAmount.innerText);

    depositAmount.innerText = previousDepositAmount + newDepositAmount;

    // clear deposit input
    depositInput.value = "";

    // now updating the balance amount

    const balanceAmount = document.getElementById("balanceAmount");

    const previousBalanceAmount = parseFloat(balanceAmount.innerText);

    balanceAmount.innerText = previousBalanceAmount + newDepositAmount; 
    
});

// now for the withdraw button

document.getElementById("withdrawButton").addEventListener('click', function(){
    // taking withdraw input

    const withdrawInput = document.getElementById("withdrawInput");
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    const withdrawAmount = document.getElementById("withdrawAmount");
    const previoisWithdrawAmount = parseFloat(withdrawAmount.innerText);

    withdrawAmount.innerText = previoisWithdrawAmount + newWithdrawAmount;

    // clear withdraw input
    withdrawInput.value='';

    // now updating the balance amount

    const balanceAmount = document.getElementById("balanceAmount");

    const previousBalanceAmount = parseFloat(balanceAmount.innerText);

    balanceAmount.innerText = previousBalanceAmount - newWithdrawAmount; 
});