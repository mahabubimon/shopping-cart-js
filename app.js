function updateProductNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');

    let productNumber = productInput.value;

    if (isIncrease) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-price');
    productTotal.innerText = productNumber * price;

    updateTotal();
    // updateTotal('case');
}

function updateTotal() {
    const subTotal = document.getElementById('sub-total');
    const taxTotal = document.getElementById('tax');
    const grossTotal = document.getElementById('total');

    const phoneAmount = document.getElementById('phone-price').innerText;
    const caseAmount = document.getElementById('case-price').innerText;

    // const caseAmount = document.getElementById(product + '-price').innerText;
    const total = parseInt(phoneAmount) + parseInt(caseAmount);
    subTotal.innerText = total;
    taxTotal.innerText = total / 10;
    grossTotal.innerText = total + total / 10;
}

// phone event handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

// case event handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

