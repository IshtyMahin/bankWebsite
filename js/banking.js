
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
     inputField.value = '';
    return amountValue;
}
   
function updateTotalField(totalFieldId,amount){
  
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
   if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
   }
   else{
    balanceTotal.innerText = previousBalanceTotal - amount;
   }
}
//handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
  
    const depositAmount = getInputValue('deposit-input');
    //get and update deposit total
    updateTotalField('deposit-total',depositAmount);
    //update balance
    updateBalance(depositAmount,true)
   
})

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
  
    const withdrawAmount = getInputValue('withdraw-input')
    //get and update withdraw total
    updateTotalField('withdraw-total',withdrawAmount)
    //update balance
   updateBalance(withdrawAmount,false)
})