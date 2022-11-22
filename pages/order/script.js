let orderBtn = document.getElementById('order-btn');
let noOfBooks = document.getElementById('no-of-books');

let bag = JSON.parse(localStorage.getItem('bookData')) || [];

noOfBooks.innerText = bag.length;

let validName =  false;
let validSurname = false;
let validDate =  false;
let validStreet =  false;
let validHouseNo =  false;
let validFlatNo = false;
let validPaymentMode = false;

let checkoutForm = document.getElementById('checkout-form');

checkoutForm.name.addEventListener('blur', showNameError)

function showNameError() {
    let name = checkoutForm.name;
    let allLetters = /^[A-Za-z]+$/;
    let minLength = 4;
    errContainer = document.getElementById('name-error');

    if (name.value == null || name.value == '') {
        name.classList.add('invalid');
        document.getElementById('name-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, name cannot be empty.";
        validName = false;

    } else if (!name.value.match(allLetters)) {
        name.classList.add('invalid');
        document.getElementById('name-icon').classList.add('invalid');
        // If the field contain numbers, the following error message will display.
        errContainer.textContent = "This field is invalid, name cannot include numbers.";
                validName = false;

    } else if (name.value.length < minLength) {
        name.classList.add('invalid');
        document.getElementById('name-icon').classList.add('invalid');
        // If the data is too short, the following error message will display.
        errContainer.textContent = `This field is invalid, name should be at least ${minLength} characters; you entered ${name.value.length} characters.`;
                validName = false;
    } else {
        name.classList.remove('invalid');
        document.getElementById('name-icon').classList.remove('invalid');
        errContainer.textContent = ''
        validName = true;
    }
    enableOrderBtn();
}
checkoutForm.surname.addEventListener('blur', showSurnameError)

function showSurnameError() {
    let surname = checkoutForm.surname;
    let allLetters = /^[A-Za-z]+$/;
    let minLength = 5;
    errContainer = document.getElementById('surname-error');

    if (surname.value == null || surname.value == '') {
        surname.classList.add('invalid');
        document.getElementById('surname-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, surname cannot be empty.";
                validSurname = false;


    } else if (!surname.value.match(allLetters)) {
        surname.classList.add('invalid');
        document.getElementById('surname-icon').classList.add('invalid');
        // If the field contain numbers, the following error message will display.
        errContainer.textContent = "This field is invalid, surname cannot include numbers.";
        validSurname = false;

    } else if (surname.value.length < minLength) {
        surname.classList.add('invalid');
        document.getElementById('surname-icon').classList.add('invalid');
        // If the data is too short, the following error message will display.
        errContainer.textContent = `This field is invalid, surname should be at least ${minLength} characters; you entered ${surname.value.length} characters.`;
        validSurname = false;
    } else {
        surname.classList.remove('invalid');
        document.getElementById('surname-icon').classList.remove('invalid');
        errContainer.textContent = '';
        validSurname = true;
    }
    enableOrderBtn();
}
checkoutForm.date.addEventListener('blur', showDateError)

function showDateError() {
    let date = checkoutForm.date;
    let currentDate = new Date();
    let datePicked = new Date(date.value)
    errContainer = document.getElementById('date-error');
    validDate = false;

    if (date.value == null || date.value == '') {
        date.classList.add('invalid');
        document.getElementById('date-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, date cannot be empty.";
        validDate = false;

    } else if (datePicked < currentDate) {
        date.classList.add('invalid');
        document.getElementById('date-icon').classList.add('invalid');
        // If the field is earlier than order date, the following error message will display.
        errContainer.textContent = "This field is invalid, delivery date cannot be on OR before placing order.";
        validDate = false;
    } else {
        date.classList.remove('invalid');
        document.getElementById('date-icon').classList.remove('invalid');
        errContainer.textContent = '';
        validDate = true;
    }
    enableOrderBtn();
}

checkoutForm.street.addEventListener('blur', showStreetError)

function showStreetError() {
    let street = checkoutForm.street;
    let minLength = 5;
    errContainer = document.getElementById('street-error');

    if (street.value == null || street.value == '') {
        street.classList.add('invalid');
        document.getElementById('street-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, street cannot be empty.";
        validStreet = false;

    } else if (street.value.length < minLength) {
        street.classList.add('invalid');
        document.getElementById('street-icon').classList.add('invalid');
        // If the data is too short, the following error message will display.
        errContainer.textContent = `This field is invalid, street should be at least ${minLength} characters; you entered ${street.value.length} characters.`;
        validStreet = false;
    } else {
        street.classList.remove('invalid');
        document.getElementById('street-icon').classList.remove('invalid');
        errContainer.textContent = '';
        validStreet = true;
    }
    enableOrderBtn();
}

checkoutForm.houseNo.addEventListener('blur', showHouseNoError)

function showHouseNoError() {
    let houseNo = checkoutForm.houseNo;
    let positiveValue = /^[1-9]+[0-9]*$/;
    errContainer = document.getElementById('house-no-error');

    if (houseNo.value == null || houseNo.value == '') {
        houseNo.classList.add('invalid');
        document.getElementById('house-no-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, house number cannot be empty.";
        validHouseNo = false;

    } else if (!houseNo.value.match(positiveValue)) {
        houseNo.classList.add('invalid');
        document.getElementById('house-no-icon').classList.add('invalid');
        // If the data is too short, the following error message will display.
        errContainer.textContent = `This field is invalid, house number should be positive value only`;
        validHouseNo = false;
    } else {
        houseNo.classList.remove('invalid');
        document.getElementById('house-no-icon').classList.remove('invalid');
        errContainer.textContent = '';
        validHouseNo = true;
    }
    enableOrderBtn();
}

checkoutForm.flatNo.addEventListener('blur', showFlatNoError)

function showFlatNoError() {
    let flatNo = checkoutForm.flatNo;
    errContainer = document.getElementById('flat-no-error');

    if (flatNo.value == null || flatNo.value == '') {
        flatNo.classList.add('invalid');
        document.getElementById('flat-no-icon').classList.add('invalid');
        // If the field is empty, the following error message will display.
        errContainer.textContent = "This field is invalid, flat number cannot be empty.";
        validFlatNo = false;

    } else if (!/(?!.*-$)^[1-9]+[-0-9]*$/.test(flatNo.value)) {
        flatNo.classList.add('invalid');
        document.getElementById('flat-no-icon').classList.add('invalid');
        // If the data is too short, the following error message will display.
        errContainer.textContent = `This field is invalid, flat number cannot begin with -`;
        validFlatNo = false;
    } else {
        flatNo.classList.remove('invalid');
        document.getElementById('flat-no-icon').classList.remove('invalid');
        errContainer.textContent = '';
        validFlatNo = true;
    }
    enableOrderBtn();
}

let cashRadio = document.getElementById('bc1');
let cardRadio = document.getElementById('bc2');

cashRadio.addEventListener('change', showPayError)
cardRadio.addEventListener('change', showPayError)

function showPayError() {
    let paymentMode = checkoutForm.pay;
    errContainer = document.getElementById('payment-error');
    for (var i=0; i<paymentMode.length; i++) {
        if (paymentMode[i].checked)
        break;
        }
        if (i==paymentMode.length)
        return alert("This field is invalid, pls select a payment mode.");
        cashRadio.classList.remove('invalid');
        cardRadio.classList.remove('invalid');
        errContainer.textContent = '';
        validPaymentMode = true;
        enableOrderBtn();
    }

        const enableOrderBtn = () => {
            if (
                validName &&
                validSurname &&
                validDate &&
                validStreet &&
                validHouseNo &&
                validFlatNo &&
                validPaymentMode
            ) {
                orderBtn.disabled = false;
                orderBtn.classList.remove('disabled');
            } else {
                orderBtn.disabled = true;
                orderBtn.classList.add('disabled');
            }
    }

let infoCard = document.getElementById('info-container');
let anglesBtn = document.getElementById('angles-btn');
let showInfo = (e) => {
    e.preventDefault();
    checkoutForm.reset();
    bag = [];
    localStorage.setItem('bookData', JSON.stringify(bag));
    calcBookInBag();
    infoCard.classList.remove('off-screen');
    infoCard.classList.add('on-screen');
    orderBtn.disabled = true;
    orderBtn.classList.add('disabled');
}
orderBtn.addEventListener('click', showInfo);

let hideInfo = () => {
    infoCard.classList.remove('on-screen');
    infoCard.classList.add('off-screen');
    checkoutForm.submit();
}
anglesBtn.addEventListener('click', hideInfo);