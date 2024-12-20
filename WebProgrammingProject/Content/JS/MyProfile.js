// Sayfa y�klendi�inde varsay�lan i�eri�i g�ster
document.addEventListener("DOMContentLoaded", function () {
    showContent('profile-info');
});

function showContent(contentId) {
    // T�m i�erikleri gizle
    document.querySelectorAll('.right-wrapper > div').forEach(function (content) {
        content.style.display = 'none';
    });

    // Belirli i�eri�i g�ster
    document.querySelector(`.${contentId}`).style.display = 'block';
}


//tarih alan�na t�klay�nca takvim a�ar '�al��m�yor unutma yap .d'
$(function () {
    $(".birthday").datepicker();
});


//pencere kismi
function openEditPopup() {
    document.getElementById("editPopup").style.display = "block";
}

function closeEditPopup() {
    document.getElementById("editPopup").style.display = "none";
}

function saveEdit() {
    var newName = document.getElementById("editName").value;
    var newPhoneNumber = document.getElementById("editPhoneNumber").value;
    var newEmail = document.getElementById("editEmail").value;
    var newGender = document.querySelector('input[name="editGender"]:checked');
    var newBirthday = document.getElementById("editBirthday").value;

    if (newName !== "") {
        document.getElementById("fullName").textContent = newName;
    }
    if (newPhoneNumber !== "") {
        document.getElementById("phoneNumber").textContent = newPhoneNumber;
    }
    if (newEmail !== "") {
        document.getElementById("email").textContent = newEmail;
    }
    if (newGender) {
        document.getElementById("gender").textContent = newGender.value;
    }
    if (newBirthday !== "") {
        document.getElementById("birthday").textContent = newBirthday;
    }
    // Kapat popup
    closeEditPopup();
}



// Di�er fonksiyonlar i�in ihtiya� duyulan i�levselli�i ekleyebilirsiniz
function openModal() {
    document.getElementById('addModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('addModal').style.display = 'none';
}

function addPassport() {
    var birthday = document.getElementById('birthday').value;
    var country = document.getElementById('country').value;
    var expirationDate = document.getElementById('expirationDate').value;

    if (birthday || country || expirationDate) {
        // E�er gerekli alanlar doluysa bilgileri g�ster
        document.getElementById('passportInfo').style.display = 'block';
        document.getElementById('expirationInfo').textContent = 'Expiry Date: ' + expirationDate;

        // Butonlar� ve texti g�ster
        document.getElementById('edit-buttons-pass').style.display = 'flex';
        document.getElementById('edit-button-pass').style.display = 'inline-block';

        // Modal� kapat
        closeModal();
    } else {
        alert('Please fill in all fields.');
        closeModal();
    }
}

function resetForm() {
    // Formdaki t�m alanlar� s�f�rla
    document.getElementById('birthday').value = '';
    document.getElementById('country').value = '';
    document.getElementById('expirationDate').value = '';
}

function editPassport() {
    // Edit i�levselli�i
    openModal();
    document.getElementById('passportInfo').style.display = 'none'; // Bilgileri gizle
    document.getElementById('edit-buttons-pass').style.display = 'none'; // Butonlar� gizle
    document.getElementById('edit-button-pass').style.display = 'none'; // Edit butonunu gizle
    closeModal();
}

function deletePassport() {
    // Silme i�levselli�i
    document.getElementById('passportInfo').style.display = 'none'; // Bilgileri gizle
    document.getElementById('edit-buttons-pass').style.display = 'none'; // Butonlar� gizle
    document.getElementById('edit-button-pass').style.display = 'none'; // Edit butonunu gizle
    closeModal(); // Pencereyi kapat
}