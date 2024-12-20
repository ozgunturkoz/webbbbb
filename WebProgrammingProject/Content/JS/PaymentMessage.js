function submitPayment() {

    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const email = document.getElementById("Email").value;
    const cardNumber = document.getElementById("CardNumber").value;
    const expiryDate = document.getElementById("ExpiryDate").value;
    const cvv = document.getElementById("Cvv").value;


    if (firstName === '' || lastName === '' || email === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
        alert('Please fill in all fields before submitting.');
    } else {

        alert('Payment successful!\n');
    }
}