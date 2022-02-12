
function getInputValue(inputId) {
    const inputDiposit = document.getElementById(inputId);
    const getDipositText = inputDiposit.value;
    const getDipositAmount = parseFloat(getDipositText);
    // Clear diposit Input Field
    inputDiposit.value = "";
    return getDipositAmount;
}



document.getElementById('deposite-button').addEventListener('click', function () {
    const getDipositAmount = getInputValue('input-diposit');
    // input Diposit
    // const inputDiposit = document.getElementById('input-diposit');
    // const getDipositText = inputDiposit.value;
    // const getDipositAmount = parseFloat(getDipositText);
    //  diposit Show Area
    const dipositArea = document.getElementById('diposit-area');
    const previousAmout = parseFloat(dipositArea.innerText);
    const updateAmount = previousAmout + getDipositAmount;
    dipositArea.innerText = updateAmount;
    // Total Balance Show area
    const balanceArea = document.getElementById('total-balance');
    const previousBalance = parseFloat(balanceArea.innerText);
    const totalBalance = getDipositAmount + previousBalance;
    balanceArea.innerText = totalBalance;

})
//Input Withdraw 
document.getElementById('withdrow-button').addEventListener('click', function () {

    const getWithdrawAmount = getInputValue('input-withdraw');
    // const inputWithdraw = document.getElementById('input-withdraw');
    // const getWithdrawText = inputWithdraw.value;
    // const getWithdrawAmount = parseFloat(getWithdrawText);

    //  Withdraw show area
    const WithdrawArea = document.getElementById('withdrow-area');
    const previousWithdrow = parseFloat(WithdrawArea.innerText);
    const updateWithdrow = previousWithdrow + getWithdrawAmount;
    WithdrawArea.innerText = updateWithdrow;

    //Total After Withdraw
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceAmount = parseFloat(balanceTotal.innerText);
    const updateBalance = previousBalanceAmount - getWithdrawAmount;
    balanceTotal.innerText = updateBalance;
    // Clear withdraw Input Field
    inputWithdraw.value = "";
})

