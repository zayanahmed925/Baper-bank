function getInput(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const getInputAmount = parseInt(inputAmountText);
    // clear deposit input
    inputAmount.value = '';
    return getInputAmount;
}
function updateAmount(amountlField, amount) {
    // deposit Display
    const dipositArea = document.getElementById(amountlField, amount);
    const dipositAreaText = dipositArea.innerText;
    const dipositAreaAmount = parseInt(dipositAreaText);
    // deposit Amount Add
    const dipositUpdateAmount = amount + dipositAreaAmount;
    dipositArea.innerText = dipositUpdateAmount;
}
function totalUpdate(totalField, total, isAdd) {
    const totalBalance = document.getElementById(totalField, total, isAdd);
    const totalBanlanceText = totalBalance.innerText;
    const totalPreviousbalance = parseInt(totalBanlanceText);
    if (isAdd) {
        const totalUpdateBalance = totalPreviousbalance + total;
        totalBalance.innerText = totalUpdateBalance;
    }
    else if (isAdd != true) {
        const totalUpdateBalance = totalPreviousbalance - total;
        totalBalance.innerText = totalUpdateBalance;
    }

}

document.getElementById('deposite-button').addEventListener('click', function () {

    // const inputDiposit = document.getElementById('input-diposit');
    // const InputDipositText = inputDiposit.value;

    // const getInputAmount = parseInt(InputDipositText);
    // deposit Display

    // const dipositArea = document.getElementById('diposit-area');
    // const dipositAreaText = dipositArea.innerText;
    // const dipositAreaAmount = parseInt(dipositAreaText);
    // // deposit Amount Add
    // const dipositUpdateAmount = getInputAmount + dipositAreaAmount;
    // dipositArea.innerText = dipositUpdateAmount;

    // total balance show after deposit

    // const totalBalance = document.getElementById('total-balance');
    // const totalBanlanceText = totalBalance.innerText;
    // const totalPreviousbalance = parseInt(totalBanlanceText);
    // const totalUpdateBalance = totalPreviousbalance + getInputAmount;
    // totalBalance.innerText = totalUpdateBalance;
    //  for error andeling
    const getInputAmount = getInput('input-diposit');
    if (getInputAmount > 0) {
        updateAmount('diposit-area', getInputAmount);
        totalUpdate('total-balance', getInputAmount, true);
    }

})
//Withdrow Balance
document.getElementById('withdrow-button').addEventListener('click', function () {

    // const inputWithdraw = document.getElementById('input-withdraw');
    // const inputWithdrawText = inputWithdraw.value;


    // withdrow Display

    // const withdrowArea = document.getElementById('withdrow-area');
    // const withdrawAreaText = withdrowArea.innerText;
    // const withdrawAreaAmount = parseInt(withdrawAreaText);
    // //add for withdrow
    // const withdrawUpdateAmount = inputWithdrawAmount + withdrawAreaAmount;
    // withdrowArea.innerText = withdrawUpdateAmount;
    //total Balance show after Withdraw

    // const totalWithdrow = document.getElementById('total-balance');
    // const totalWithdrowBalanceText = totalWithdrow.innerText;
    // const totalWithdrawAmont = parseInt(totalWithdrowBalanceText);
    // const totalWithdrowUpdate = totalWithdrawAmont - inputWithdrawAmount;
    // totalWithdrow.innerText = totalWithdrowUpdate;
    const inputWithdrawAmount = getInput('input-withdraw');
    if (inputWithdrawAmount > 0) {
        updateAmount('withdrow-area', inputWithdrawAmount);
        totalUpdate('total-balance', inputWithdrawAmount, false);
    }

})