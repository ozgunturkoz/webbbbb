/*const payment=document.querySelectorAll(".paymentAcordion");

payment.forEach((paymentAcordion) => {
    paymentAcordion.addEventListener("click", () => {
        paymentAcordion.classList.toggle("active");
    
        //payment.forEach((item) => {   //ayn� anda tek bir �deme �ekli se�ilebilmesi i�in //FAILED kart bilgisi girerken ba�ka t�klamalar yap�nca otomatik kapanmas�na sebep oluyor!
        //    if (item !== paymentAcordion && item.classList.contains("active")) {
        //        item.classList.remove("active");
        //    }
        //});
    
    });
});*/

/*const payments = document.querySelectorAll(".paymentAcordion");

payments.forEach((paymentAccordion) => { //kart bilgisi input girerken pencerenin kapanmamas� i�in 
    const header = paymentAccordion.querySelector(".paymentHeader");

    header.addEventListener("click", () => {
        paymentAccordion.classList.toggle("active");

        payments.forEach((item) => { //ayn� anda tek bir �deme �ekli se�ilebilmesi i�in
            if (item !== paymentAccordion && item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const payments = document.querySelectorAll(".paymentAcordion");

    payments.forEach((paymentAccordion) => {
        const header = paymentAccordion.querySelector(".paymentHeader");

        header.addEventListener("click", () => {
            paymentAccordion.classList.toggle("active");

            payments.forEach((item) => {
                if (item !== paymentAccordion && item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });
        });
    });
});


function submitPayment() {
    // Get values from the form
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const email = document.getElementById("Email").value;
    const cardNumber = document.getElementById("CardNumber").value;
    const expiryDate = document.getElementById("ExpiryDate").value;
    const cvv = document.getElementById("Cvv").value;

    // Perform further actions (e.g., send data to server)
    alert(`Payment information:\nName: ${firstName} ${lastName}\nEmail: ${email}\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
}