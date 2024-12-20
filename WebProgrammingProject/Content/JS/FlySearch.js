var activeBoxId = 'box-one'; // Varsayýlan olarak görünen kutu

function showBox(boxId) {
    // Önceki aktif kutuyu gizle
    var activeBox = document.querySelector('.' + activeBoxId);
    activeBox.classList.remove('active');

    // Seçilen kutuyu göster
    var selectedBox = document.querySelector('.' + boxId);
    selectedBox.classList.add('active');

    // Aktif kutu kimliðini güncelle
    activeBoxId = boxId;
}

// Sayfa yüklendiðinde varsayýlan olarak görünen kutuyu göster
showBox(activeBoxId);



//kalkis ile varis arasýndaki swap iconunu calisitiran js kodu
function swapLocations() {
    // Kalkýþ ve varýþ alanlarýnýn deðerlerini al
    var kalkisValue = document.querySelector('.search-field-kalkis').value;
    var varisValue = document.querySelector('.search-field-varis').value;

    // Kalkýþ alanýna varýþ deðerini, varýþ alanýna kalkýþ deðerini at
    document.querySelector('.search-field-kalkis').value = varisValue;
    document.querySelector('.search-field-varis').value = kalkisValue;
}



function handleRadioChange() {
    var roundTripRadio = document.getElementById("roundTrip");
    var dateFieldKalkis = document.querySelector('.date-field-kalkis');
    var dateFieldVaris = document.querySelector('.date-field-varis');

    if (roundTripRadio.checked) {
        // Round Trip seçeneði seçildiðinde
        dateFieldKalkis.removeAttribute('disabled');
        dateFieldVaris.removeAttribute('disabled');
    } else {
        // One Way seçeneði seçildiðinde
        dateFieldKalkis.removeAttribute('disabled');
        dateFieldVaris.setAttribute('disabled', 'true');
        dateFieldVaris.value = ""; // "One Way" seçeneðinde varýþ tarihini temizle
    }
}



//takvimde gecmisi secmeyi engelleme ve dd.mm.yyyy yazdýrma js kodu
document.addEventListener('DOMContentLoaded', function () {
    // Bugünün tarihini al
    var today = new Date().toISOString().split('T')[0];

    // "date-field-kalkis" için
    var dateFieldKalkis = document.querySelector('.date-field-kalkis');
    dateFieldKalkis.value = today; // Bugünkü tarihi varsayýlan olarak ayarla
    dateFieldKalkis.setAttribute('min', today); // Geçmiþ tarihleri seçilemez yap
    dateFieldKalkis.setAttribute('placeholder', 'dd.mm.yyyy'); // Ýngilizce formatý ayarla

    // "date-field-varis" için
    var dateFieldVaris = document.querySelector('.date-field-varis');
    dateFieldVaris.setAttribute('min', today); // Geçmiþ tarihleri seçilemez yap
    dateFieldVaris.setAttribute('placeholder', 'dd.mm.yyyy'); // Ýngilizce formatý ayarla

});



// Flight form
function SelectFlight() {
    var hedefURL = 'SelectFlight.html';
    window.location.href = hedefURL;
}

document.querySelector('.box-one button.ucus-arama-butonu').addEventListener('click', function (event) {
    // Olayýn varsayýlan davranýþýný engelle
    event.preventDefault();

    var fromInput = document.querySelector('.box-one input.search-field-kalkis');
    var toInput = document.querySelector('.box-one input.search-field-varis');
    var departureDateInput = document.querySelector('.box-one input.date-field-kalkis');
    var returnDateInput = document.querySelector('.box-one input.date-field-varis');
    var passengerInput = document.querySelector('.box-one input.yolcu-sayisi');

    if (
        fromInput.value.trim() !== '' &&
        toInput.value.trim() !== '' &&
        departureDateInput.value.trim() !== '' &&
        (document.querySelector('.radio:checked').id === 'roundTrip'
            ? returnDateInput.value.trim()
            : true) &&
        passengerInput.value.trim() !== ''
    ) {
        // searchFlight fonksiyonu burada çaðrýlýr
        SelectFlight();
    } else {
        // Eðer koþullar saðlanmazsa uyarý verilir
        alert('Please fill in all the required fields.');
    }
});

// Online Check-in form
document.querySelector('.box-two button.ucus-arama-butonu').addEventListener('click', function () {
    var surnameInput = document.querySelector('.box-two input.check-in-surname');
    var pnrInput = document.querySelector('.box-two input.check-in-pnr');

    if (surnameInput.value && pnrInput.value) {
        // Perform check-in operation
        alert('Online check-in performed!');
    } else {
        alert('Please fill in all the required fields.');
    }
});

// Manage Flight form
document.querySelector('.box-three button.ucus-arama-butonu').addEventListener('click', function () {
    var manageSurnameInput = document.querySelector('.box-three input.manage-surname');
    var managePnrInput = document.querySelector('.box-three input.manage-pnr');

    if (manageSurnameInput.value && managePnrInput.value) {
        // Perform manage flight operation
        alert('Manage flight operation performed!');
    } else {
        alert('Please fill in all the required fields.');
    }
});
