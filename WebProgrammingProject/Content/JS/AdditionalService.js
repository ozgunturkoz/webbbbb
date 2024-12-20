
document.addEventListener("DOMContentLoaded", function () {
    const seatMap = document.getElementById("seat-map");
    let selectedSeatIndex = null; // Seçili koltuğun endeksini tutan değişken
    const passengerInfo = document.getElementById("passenger-info");

    // Yolcu bilgileri bölümü için scroll olayı
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || window.pageYOffset;
        passengerInfo.style.bottom = scrollPosition + "px";
    });

    const magnifierEl = document.querySelector(".magnifier");

    // Arama çubuğunun açılıp kapanmasını sağlayacak olay dinleyici
    magnifierEl.addEventListener("click", function () {
        const searchBarContainerEl = document.querySelector(".search-bar-container");
        searchBarContainerEl.classList.toggle("active");
    });

    // Simulated seat data
    const seats = [
        ['1A', '1B', '1C', 'C', '1D', '1E', '1F'],
        ['2A', '2B', '2C', 'C', '2D', '2E', '2F'],
        ['3A', '3B', '3C', 'C', '3D', '3E', '3F'],
        ['4A', '4B', '4C', 'C', '4D', '4E', '4F'],
        ['5A', '5B', '5C', 'C', '5D', '5E', '5F'],
        ['6A', '6B', '6C', 'C', '6D', '6E', '6F'],
        ['7A', '7B', '7C', 'C', '7D', '7E', '7F'],
        ['8A', '8B', '8C', 'C', '8D', '8E', '8F'],
        ['9A', '9B', '9C', 'C', '9D', '9E', '9F'],
        ['10A', '10B', '10C', 'C', '10D', '10E', '10F'],
        ['11A', '11B', '11C', 'C', '11D', '11E', '11F'],
        ['12A', '12B', '12C', 'C', '12D', '12E', '12F'],
        ['13A', '13B', '13C', 'C', '13D', '13E', '13F'],
        ['14A', '14B', '14C', 'C', '14D', '14E', '14F'],
        ['15A', '15B', '15C', 'C', '15D', '15E', '15F'],
        ['16A', '16B', '16C', 'C', '16D', '16E', '16F'],
        ['17A', '17B', '17C', 'C', '17D', '17E', '17F'],
        ['18A', '18B', '18C', 'C', '18D', '18E', '18F'],
        ['19A', '19B', '19C', 'C', '19D', '19E', '19F'],
        ['20A', '20B', '20C', 'C', '20D', '20E', '20F'],
        ['21A', '21B', '21C', 'C', '21D', '21E', '21F'],
        ['22A', '22B', '22C', 'C', '22D', '22E', '22F'],
        ['23A', '23B', '23C', 'C', '23D', '23E', '23F'],
        ['24A', '24B', '24C', 'C', '24D', '24E', '24F'],
        ['25A', '25B', '25C', 'C', '25D', '25E', '25F'],
        ['26A', '26B', '26C', 'C', '26D', '26E', '26F'],
        ['27A', '27B', '27C', 'C', '27D', '27E', '27F'],
        ['28A', '28B', '28C', 'C', '28D', '28E', '28F'],
        ['29A', '29B', '29C', 'C', '29D', '29E', '29F'],
        ['30A', '30B', '30C', 'C', '30D', '30E', '30F'],
        ['31A', '31B', '31C', 'C', '31D', '31E', '31F'],
        ['32A', '32B', '32C', 'C', '32D', '32E', '32F'],
        // Koltuk dizilimi
    ];

    // Render seat map
    seats.forEach((row, rowIndex) => {
        row.forEach((seat, colIndex) => {
            const seatElement = document.createElement("div");
            seatElement.classList.add("seat");
            if (seat === 'C') {
                seatElement.classList.add("corridor");
            } else {
                seatElement.addEventListener("click", () => toggleSeat(rowIndex, colIndex));
            }
            seatElement.textContent = seat || '';
            seatMap.appendChild(seatElement);
        });
    });

    // Function to toggle seat selection
    function toggleSeat(row, col) {
        const index = row * seats[0].length + col;
        if (seats[row][col] !== 'C') {
            if (selectedSeatIndex !== index) {
                // Önceki seçili koltuğun seçimini kaldır
                if (selectedSeatIndex !== null) {
                    const prevSelectedSeatElement = seatMap.children[selectedSeatIndex];
                    prevSelectedSeatElement.classList.remove("selected");
                }
                // Yeni seçilen koltuğu işaretle ve indeksini güncelle
                const seatElement = seatMap.children[index];
                seatElement.classList.add("selected");
                selectedSeatIndex = index;
            } else {
                // Koltuğun seçimini iptal et
                const seatElement = seatMap.children[index];
                seatElement.classList.remove("selected");
                selectedSeatIndex = null;
            }
        }
    }
});





