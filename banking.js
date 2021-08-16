// banking section 

// deposite button handle 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit amount 
    const dipositInput = document.getElementById('diposite-input');
    const dipositAmountText = dipositInput.value;
    const dipositAmount = parseFloat(dipositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    // deposit summation 
    const currentDepositAmountText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountText);
    const newDepositTotal = currentDepositAmount + dipositAmount;
    depositTotal.innerText = newDepositTotal;

    // input clear 
    dipositInput.value = '';

    // update balance


    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmountText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceAmountText);
    const newBalanceTotal = currentBalanceAmount + dipositAmount;
    balanceTotal.innerText = newBalanceTotal;

});


// handle withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw section 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw balance section 

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);

    const newWithdrawTotal = withdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw input 
    withdrawInput.value = '';

    // update balance because of withdraw 

    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmountText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceAmountText);
    const newBalanceTotal = currentBalanceAmount - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})