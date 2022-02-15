document.getElementById('deposite-button').addEventListener('click', function () {
    const inputDiposit = document.getElementById('input-diposit');
    const InputDipositText = inputDiposit.value;
    const getInputAmount = parseInt(InputDipositText);
    //deposit Display
    const dipositArea = document.getElementById('diposit-area');
    const dipositAreaText = dipositArea.innerText;
    const dipositAreaAmount = parseInt(dipositAreaText);
    //deposit Amount Add
    const dipositUpdateAmount = getInputAmount + dipositAreaAmount;
    dipositArea.innerText = dipositUpdateAmount;

    // total balance show after deposit
    const totalBalance = document.getElementById('total-balance');
    const totalBanlanceText = totalBalance.innerText;
    const totalPreviousbalance = parseInt(totalBanlanceText);
    const totalUpdateBalance = totalPreviousbalance + getInputAmount;
    totalBalance.innerText = totalUpdateBalance;

    // clear deposit input
    inputDiposit.value = '';
})
//Withdrow Balance
document.getElementById('withdrow-button').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawText = inputWithdraw.value;
    const inputWithdrawAmount = parseInt(inputWithdrawText);

    // withdrow Display
    const withdrowArea = document.getElementById('withdrow-area');
    const withdrawAreaText = withdrowArea.innerText;
    const withdrawAreaAmount = parseInt(withdrawAreaText);
    //add for withdrow
    const withdrawUpdateAmount = inputWithdrawAmount + withdrawAreaAmount;
    withdrowArea.innerText = withdrawUpdateAmount;
    //total Balance show after Withdraw
    const totalWithdrow = document.getElementById('total-balance');
    const totalWithdrowBalanceText = totalWithdrow.innerText;
    const totalWithdrawAmont = parseInt(totalWithdrowBalanceText);
    const totalWithdrowUpdate = totalWithdrawAmont - inputWithdrawAmount;
    totalWithdrow.innerText = totalWithdrowUpdate;
    // console.log(totalWithdrowUpdate);


    // const totalBalanceAfterWithdraw = totalUpdateBalance - inputWithdrawAmount;
    // totalWithdrowBalance.innerText = totalBalanceAfterWithdraw;
    // clear deposit input
    inputWithdraw.value = '';
})