function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // Tax Amount
    const taxAmountString = (currentPhoneTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentPhoneTotal + taxAmount;
    setTextElementValueById('final-amount', finalAmount);



}