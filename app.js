function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const curnVirtualRegex = /^[a-z]+[a-z0-9]*[0-9]{1,2}@curnvirtual\.edu\.co$/;
    const curnRegex = /^[aeiou][a-zA-Z]*(\.|_)[a-zA-Z]+@curn\.edu\.co$/;

    if (curnVirtualRegex.test(emailInput) || curnRegex.test(emailInput)) {
        alert('Email is valid.');
    } else {
        alert('Email is invalid.');
    }
}

function validateHexadecimal() {
    const hexInput = document.getElementById('hexadecimal').value;
    const hexRegex = /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/;

    if (hexRegex.test(hexInput)) {
        alert('Hexadecimal number is valid.');
    } else {
        alert('Hexadecimal number is invalid.');
    }
}

function validateDecimal() {
    const decimalInput = document.getElementById('decimal').value;
    const decimalRegex = /^(0|[1-4](,\d{1})?|5(,0)?)$/;

    if (decimalRegex.test(decimalInput)) {
        alert('Decimal number is valid.');
    } else {
        alert('Decimal number is invalid.');
    }
}

document.getElementById('validateEmailBtn').addEventListener('click', validateEmail);
document.getElementById('validateHexBtn').addEventListener('click', validateHexadecimal);
document.getElementById('validateDecimalBtn').addEventListener('click', validateDecimal);  
