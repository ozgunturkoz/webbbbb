var activeBoxId = 'box-one'; // Varsay�lan olarak g�r�nen kutu

function showBox(boxId) {
    // �nceki aktif kutuyu gizle
    var activeBox = document.querySelector('.' + activeBoxId);
    activeBox.classList.remove('active');

    // Se�ilen kutuyu g�ster
    var selectedBox = document.querySelector('.' + boxId);
    selectedBox.classList.add('active');

    // Aktif kutu kimli�ini g�ncelle
    activeBoxId = boxId;
}

// Sayfa y�klendi�inde varsay�lan olarak g�r�nen kutuyu g�ster
showBox(activeBoxId);



//kalkis ile varis aras�ndaki swap iconunu calisitiran js kodu
function swapLocations() {
    // Kalk�� ve var�� alanlar�n�n de�erlerini al
    var kalkisValue = document.querySelector('.search-field-kalkis').value;
    var varisValue = document.querySelector('.search-field-varis').value;

    // Kalk�� alan�na var�� de�erini, var�� alan�na kalk�� de�erini at
    document.querySelector('.search-field-kalkis').value = varisValue;
    document.querySelector('.search-field-varis').value = kalkisValue;
}



function handleRadioChange() {
    var roundTripRadio = document.getElementById("roundTrip");
    var dateFieldKalkis = document.querySelector('.date-field-kalkis');
    var dateFieldVaris = document.querySelector('.date-field-varis');

    if (roundTripRadio.checked) {
        // Round Trip se�ene�i se�ildi�inde
        dateFieldKalkis.removeAttribute('disabled');
        dateFieldVaris.removeAttribute('disabled');
    } else {
        // One Way se�ene�i se�ildi�inde
        dateFieldKalkis.removeAttribute('disabled');
        dateFieldVaris.setAttribute('disabled', 'true');
        dateFieldVaris.value = ""; // "One Way" se�ene�inde var�� tarihini temizle
    }
}



//takvimde gecmisi secmeyi engelleme ve dd.mm.yyyy yazd�rma js kodu
document.addEventListener('DOMContentLoaded', function () {
    // Bug�n�n tarihini al
    var today = new Date().toISOString().split('T')[0];

    // "date-field-kalkis" i�in
    var dateFieldKalkis = document.querySelector('.date-field-kalkis');
    dateFieldKalkis.value = today; // Bug�nk� tarihi varsay�lan olarak ayarla
    dateFieldKalkis.setAttribute('min', today); // Ge�mi� tarihleri se�ilemez yap
    dateFieldKalkis.setAttribute('placeholder', 'dd.mm.yyyy'); // �ngilizce format� ayarla

    // "date-field-varis" i�in
    var dateFieldVaris = document.querySelector('.date-field-varis');
    dateFieldVaris.setAttribute('min', today); // Ge�mi� tarihleri se�ilemez yap
    dateFieldVaris.setAttribute('placeholder', 'dd.mm.yyyy'); // �ngilizce format� ayarla

});



// Flight form
function SelectFlight() {
    var hedefURL = 'SelectFlight.html';
    window.location.href = hedefURL;
}

document.querySelector('.box-one button.ucus-arama-butonu').addEventListener('click', function (event) {
    // Olay�n varsay�lan davran���n� engelle
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
        // searchFlight fonksiyonu burada �a�r�l�r
        SelectFlight();
    } else {
        // E�er ko�ullar sa�lanmazsa uyar� verilir
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
