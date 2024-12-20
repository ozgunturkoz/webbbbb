// HTML içindeki ".wrapper" sýnýfýna sahip elementi seç
const wrapper = document.querySelector(".wrapper");

// HTML içindeki ".login-link" sýnýfýna sahip elementi seç
const loginLink = document.querySelector(".login-link");

// HTML içindeki ".register-link" sýnýfýna sahip elementi seç
const registerLink = document.querySelector(".register-link");

// HTML içindeki ".btnLogin-popup" sýnýfýna sahip elementi seç
const btnPopup = document.querySelector(".btnLogin-popup");

// HTML içindeki ".icon-close" sýnýfýna sahip elementi seç
const iconClose = document.querySelector(".icon-close");

// HTML içindeki ".search-bar-container" sýnýfýna sahip elementi seç
const searchBarContainerEl = document.querySelector(".search-bar-container");

// HTML içindeki ".magnifier" sýnýfýna sahip elementi seç
const magnifierEl = document.querySelector(".magnifier");

// "Register" baðlantýsýna týklanýnca çalýþacak olan olay dinleyicisi
registerLink.addEventListener("click", () => {
    wrapper.classList.add("active"); // "wrapper" elementine "active" sýnýfýný ekle
});

// "Login" baðlantýsýna týklanýnca çalýþacak olan olay dinleyicisi
loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active"); // "wrapper" elementinden "active" sýnýfýný kaldýr
});

// "Login" butonuna týklanýnca çalýþacak olan olay dinleyicisi
btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup"); // "wrapper" elementine "active-popup" sýnýfýný ekle
});

// Kapatma ikonuna týklanýnca çalýþacak olan olay dinleyicisi
iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup"); // "wrapper" elementinden "active-popup" sýnýfýný kaldýr
});

// Arama çubuðu animasyonu için olay dinleyicisi
magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active"); // "searchBarContainerEl" elementine "active" sýnýfýný ekleyip/çýkart
});

function Baggageinformation() {
    var hedefURL = "Baggageinformation.html";
    window.location.href = hedefURL;
}

function Upgradeinformation() {
    var hedefURL = "Upgradeinformation.html";
    window.location.href = hedefURL;
}

function Loungesinformation() {
    var hedefURL = "Loungesinformation.html";
    window.location.href = hedefURL;
}

function Travelinformation() {
    var hedefURL = "Travelinformation.html";
    window.location.href = hedefURL;
}


const dummyUser = {
    username: "demoUser",
    fullName: "Demo User",
};

// Function to handle login
function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const welcomeMessage = document.getElementById("welcome-message");
    const loginSection = document.getElementById("login-section");
    const profileSection = document.getElementById("profile-section");

    // Dummy login check (replace this with actual authentication logic)
    if (usernameInput.value === dummyUser.username) {
        // Display welcome message and switch sections
        welcomeMessage.textContent = `Welcome, ${dummyUser.fullName}!`;
        loginSection.style.display = "none";
        profileSection.style.display = "flex";
    } else {
        alert("Invalid username. Please try again.");
    }
}

// Function to handle logout
function logout() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginSection = document.getElementById("login-section");
    const profileSection = document.getElementById("profile-section");

    // Clear input fields and switch sections
    usernameInput.value = "";
    passwordInput.value = "";
    loginSection.style.display = "flex";
    profileSection.style.display = "none";
}


window.onload = function () {
    var savedDepartureCity = localStorage.getItem("DepartureCity");
    var savedArrivalCity = localStorage.getItem("ArrivalCity");

    if (savedDepartureCity) {
        document.getElementById("DepartureCity").value = savedDepartureCity;
    }

    if (savedArrivalCity) {
        document.getElementById("ArrivalCity").value = savedArrivalCity;
    }
};


function updateLocalStorage() {
    var departureCity = document.getElementById("DepartureCity").value;
    var arrivalCity = document.getElementById("ArrivalCity").value;

    localStorage.setItem("DepartureCity", departureCity);
    localStorage.setItem("ArrivalCity", arrivalCity);
}


function swapLocations() {
    var departureCity = document.getElementById("DepartureCity").value;
    var arrivalCity = document.getElementById("ArrivalCity").value;

    document.getElementById("DepartureCity").value = arrivalCity;
    document.getElementById("ArrivalCity").value = departureCity;

    updateLocalStorage();
}

function validateAndSubmit() {
    var departureCity = document.getElementById("departureCity").value;
    var arrivalCity = document.getElementById("arrivalCity").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;
    var passengerCount = document.getElementById("passengerCount").value;

    if (!departureCity || !arrivalCity || !departureDate || !returnDate || !passengerCount) {
        alert("Please fill in all required fields.");
    } else {
      
        document.getElementById("flightSearchForm").submit();
    }
}

window.onload = function () {
    var savedDepartureDate = localStorage.getItem("DepartureDate");
    var savedReturnDate = localStorage.getItem("ReturnDate");

    if (savedDepartureDate) {
        document.getElementById("DepartureDate").value = savedDepartureDate;
    }

    if (savedReturnDate) {
        document.getElementById("ReturnDate").value = savedReturnDate;
    }
};

function updateLocalStorageDate() {
    var departureDate = document.getElementById("DepartureDate").value;
    var returnDate = document.getElementById("ReturnDate").value;

    localStorage.setItem("DepartureDate", departureDate);
    localStorage.setItem("ReturnDate", returnDate);
}

function searchFlights() {
    updateLocalStorageDate();

    var departureCity = document.getElementById("DepartureCity").value;
    var arrivalCity = document.getElementById("ArrivalCity").value;

    var url = '@Url.Action("SelectFlight", "Fly")?departureCity=' + departureCity + '&arrivalCity=' + arrivalCity;

    window.location.href = url;
}

// Seçimleri al
var departureCity = document.getElementById("departureCity").value;
var arrivalCity = document.getElementById("arrivalCity").value;
var departureDate = document.getElementById("departureDate").value;
var returnDate = document.getElementById("returnDate").value;
var passengerCount = document.getElementById("passengerCount").value;

// Seçimleri localStorage'a kaydet
localStorage.setItem("departureCity", departureCity);
localStorage.setItem("arrivalCity", arrivalCity);
localStorage.setItem("departureDate", departureDate);
localStorage.setItem("returnDate", returnDate);
localStorage.setItem("passengerCount", passengerCount);


$(document).ready(function () {
    
    $("#signInButton").click(function () {
        
        $("form").submit();


    });
});


$(document).ready(function () {
    
    $("#signUpButton").click(function () {
        
        $("form").submit();


    });
});

function showCheckInAlert() {
    alert("An e-mail has been sent to you for the check-in procedures of your flight. Thank you");
}