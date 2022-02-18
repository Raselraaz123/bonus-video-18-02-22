function getInputValue(dipositWithdrawAmount) {
    const inputfield = document.getElementById(dipositWithdrawAmount)
    const valueIntext = inputfield.value;
    const value = parseFloat(valueIntext);
    inputfield.value = '';
    return value;
}
function updateTotal(updateTexBalance, amount) {
    const totalDpTag = document.getElementById(updateTexBalance);
    const previousIntext = totalDpTag.innerText;
    const convert = parseFloat(previousIntext);
    const newtotal = convert + amount;
    totalDpTag.innerText = newtotal;
    // console.log(newtotal)

}
function updateBalance(amount, isAdding) {
    const BalanceTag = document.getElementById("total-balance");
    const balanceInText = BalanceTag.innerText;
    const convertBalance = parseFloat(balanceInText);
    let totalAmountBalance;
    if (isAdding == true) {
        totalAmountBalance = convertBalance + amount;
    }
    else {
        totalAmountBalance = convertBalance - amount;
    }
    BalanceTag.innerText = totalAmountBalance;

}
document.getElementById("diposit-button btn").addEventListener("click", function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal("deposit-total", amount);
        updateBalance(amount, true);
    }
});
document.getElementById('withdraw-button btn').addEventListener('click', function () {
    const amount = getInputValue("withdraw-input");
    if (amount > 0) {
        updateTotal("withdraw-total", amount);
        updateBalance(amount, false);
    }
    // console.log(amount)
});
