document.addEventListener('DOMContentLoaded', function () {
    // ---welcome metnini gösterir---
    const welcomeMessage = document.querySelector('.FAQcontainer p');
    welcomeMessage.style.display = 'block';

    const menuOptions = document.querySelectorAll('#menu ul li a');

    menuOptions.forEach(option => {
        option.addEventListener('click', function (event) {
            event.preventDefault();
            // -------------------- menü seçeneklerine týklandýðýnda welcome metnini gizler -------------------------------------
            welcomeMessage.style.display = 'none';
            const selectedOption = this.getAttribute('onclick').replace("goster('", '').replace("')", '');
            goster(selectedOption);
        });
    });
});






function goster(secenek) {
    const accordionContainer = document.getElementById('accordion-container');
    accordionContainer.innerHTML = getContentForOption(secenek);

    // ---accordion butonlarý ve içerikleri seçer---
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    const accordionContents = document.querySelectorAll('.accordion-content');

    // ---bütün içerikleri gizler---
    accordionContents.forEach(content => {
        content.style.display = 'none';
    });

    // ---accordion butonlarýna týklama olaylarýný ekler---
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // ---týklanan butonun altýndaki içeriði bulur---
            const content = this.nextElementSibling;

            // ---diðer tüm içerikleri gizler---
            accordionContents.forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                }
            });

            // ---týklanan butonun altýndaki içeriði göster veya gizler---
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
}

function getContentForOption(secenek) {
    switch (secenek) {
        case 'baggage':
            return `
        <div class="accordion">
            <button class="accordion-btn">What is Checked Baggage?</button>
            <div class="accordion-content">
                <p>Checked baggage refers to luggage that complies with our airline's regulations and is handed over during check-in. It is stored in a secure area inaccessible to passengers during the flight, typically in the cargo hold.</p>
            </div>
            
            <button class="accordion-btn">Can I increase my baggage allowance?</button>
            <div class="accordion-content">
                <p>Yes, passengers have the option to increase their baggage allowances by purchasing additional baggage, depending on their travel class. Details can be found during the booking process.</p>
            </div>
            
            <button class="accordion-btn">Are there rules for items carried on board?</button>
            <div class="accordion-content">
                <p>Yes, there are specific rules for items carried on board. Please visit the General Rules section for detailed information on checked baggage and any restrictions.</p>
            </div>
            
            <button class="accordion-btn">What are the weight limits for Checked Baggage?</button>
            <div class="accordion-content">
                <p>Passengers should pay attention to weight limits. As per regulatory requirements, luggage exceeding 32 kg cannot be accepted as checked baggage. Excess baggage fees apply for those exceeding the free baggage allowance.</p>
            </div>
            
            <button class="accordion-btn">What is Skyline Airways' baggage responsibility?</button>
            <div class="accordion-content">
                <p>Our baggage responsibility is established by legal regulations. It is not recommended to include high-value items in checked baggage. Please refer to Carrier Liabilities and Their Limits for more information.</p>
            </div>
            
            <button class="accordion-btn">Are there prohibited items in Checked Baggage?</button>
            <div class="accordion-content">
                <p>Yes, certain items are prohibited in checked baggage, including flammable objects, explosives, fuel oils, fire extinguishers, acids, alkalis, and radioactive substances. For a detailed list, check the (9.5 Baggage Restrictions) section in the General Rules.</p>
            </div>
        </div>
    `;

        case 'registration':
            return `
            <div class="accordion">
                <button class="accordion-btn">How do I register with Skyline Airways?</button>
                <div class="accordion-content">
                    <p>Registering with Skyline Airways is simple. Visit our official website and click on the "Register" or "Sign Up" option. Follow the prompts to provide the necessary information and create your Skyline Airways account.</p>
                </div>
                
                <button class="accordion-btn">Do I need to register to book a flight?</button>
                <div class="accordion-content">
                    <p>Yes, registration is required to book a flight with Skyline Airways. Creating an account ensures a seamless booking process and allows you to manage your reservations.</p>
                </div>
                
                <button class="accordion-btn">Can I register more than one person under the same account?</button>
                <div class="accordion-content">
                    <p>No, each passenger must have their individual account for booking purposes. However, you can manage multiple reservations under one account.</p>
                </div>
                
                <button class="accordion-btn">What information is required during the registration process?</button>
                <div class="accordion-content">
                    <p>During registration, you will need to provide your personal information, including your full name, contact details, and a secure password. This information helps us create a personalized and secure account for you.</p>
                </div>
                
                <button class="accordion-btn">I forgot my password. How can I reset it?</button>
                <div class="accordion-content">
                    <p>If you forget your password, click on the "Forgot Password" link on the login page. Follow the instructions to reset your password. An email with instructions will be sent to the address associated with your account.</p>
                </div>
                
                <button class="accordion-btn">Is my personal information secure when registering with Skyline Airways?</button>
                <div class="accordion-content">
                    <p>Yes, Skyline Airways takes the security of your personal information seriously. We use advanced encryption methods to protect your data. Refer to our Privacy Policy for more details on how we handle your information.</p>
                </div>
        
            </div>
        `;

        case 'cancellationAndRefund':
            return `
        <div class="accordion">
            <button class="accordion-btn">How can I cancel my flight with Skyline Airways?</button>
            <div class="accordion-content">
                <p>Flight cancellations can be processed through your Skyline Airways account on our official website. Log in, navigate to your reservation, and follow the cancellation instructions. Additionally, you can contact our customer support for assistance.</p>
            </div>
            
            <button class="accordion-btn">Is there a fee for canceling a flight?</button>
            <div class="accordion-content">
                <p>Cancellation fees may apply, depending on the fare type and how close to the departure date the cancellation occurs. Please refer to our Fare Rules or contact our customer support for detailed information.</p>
            </div>
            
            <button class="accordion-btn">Can I get a refund if I cancel my flight?</button>
            <div class="accordion-content">
                <p>Refund eligibility depends on the fare type and the time of cancellation. Some tickets may be non-refundable, while others may allow for a partial or full refund. Check the Fare Rules or contact our customer support for specific details.</p>
            </div>
            
            <button class="accordion-btn">What is the refund process after canceling a flight?</button>
            <div class="accordion-content">
                <p>After canceling your flight, the refund process will be initiated based on the fare rules. Refunds are typically processed to the original payment method, and the timeline may vary. You will receive an email confirmation once the refund is complete.</p>
            </div>
            
            <button class="accordion-btn">Can I cancel a non-refundable ticket?</button>
            <div class="accordion-content">
                <p>Non-refundable tickets have restrictions, but some may allow for changes or adjustments. Review the Fare Rules or contact our customer support for guidance on non-refundable ticket options.</p>
            </div>
            
            <button class="accordion-btn">How long does it take to receive a refund after cancellation?</button>
            <div class="accordion-content">
                <p>Refund processing times vary but are generally completed within a few business days to weeks. Delays may occur based on the payment method and financial institutions involved.</p>
            </div>
            
            <button class="accordion-btn">What happens if Skyline Airways cancels my flight?</button>
            <div class="accordion-content">
                <p>In the event of a flight cancellation by Skyline Airways, passengers are entitled to a full refund or may opt for rescheduling. Our customer support will guide you through the available options and assist with the necessary arrangements.</p>
            </div>
        </div>
    `;


        case 'reservation':
            return `
            <div class="accordion">
                <button class="accordion-btn">How do I make a reservation with Skyline Airways?</button>
                <div class="accordion-content">
                    <p>Making a reservation with Skyline Airways is easy. Visit our official website, enter your travel details, select your preferred flight, and follow the prompts to complete the reservation process.</p>
                </div>
                
                <button class="accordion-btn">Can I make a reservation without creating an account?</button>
                <div class="accordion-content">
                    <p>While you can explore available flights without an account, you need to create one to finalize your reservation. This ensures a personalized experience and allows you to manage your bookings.</p>
                </div>
                
                <button class="accordion-btn">What information do I need to provide during the reservation process?</button>
                <div class="accordion-content">
                    <p>You'll need to provide passenger details, contact information, and payment details to complete the reservation. Ensure all information is accurate for a smooth travel experience.</p>
                </div>
                
                <button class="accordion-btn">Can I reserve a seat in advance?</button>
                <div class="accordion-content">
                    <p>Yes, Skyline Airways offers the option to reserve seats in advance during the booking process. You can choose your preferred seat based on availability.</p>
                </div>
                
                <button class="accordion-btn">How can I view or modify my reservation?</button>
                <div class="accordion-content">
                    <p>Log in to your Skyline Airways account and navigate to the "My Reservations" section. Here, you can view and modify your existing reservations, including seat selections and meal preferences.</p>
                </div>
                
                <button class="accordion-btn">Can I add extra services to my reservation, such as meals or additional baggage?</button>
                <div class="accordion-content">
                    <p>Yes, you can customize your reservation by adding extra services like meals, extra baggage, or other amenities during the booking process or by modifying your reservation later.</p>
                </div>
                
            </div>
        `;

        case 'flightWithPartners':
            return `
                <div class="accordion">
                    <button class="accordion-btn">How to register a flight made with a Skyline partner?</button>
                    <div class="accordion-content">
                        <p>To do so, go to your online Skyline account at the bottom of the page under the heading « Register your flight » to enter the data of your flight (Ticket number, date of flight, origin / destination and flight number). To guarantee this registration, please also send an email to: info@skyline.com Partner flight registration can take up to 4 weeks.</p>
                    </div>
                </div>
            `;

        case 'checkInInformation':
            return `
                    <div class="accordion">
                        <button class="accordion-btn">What time should I arrive at the airport?</button>
                        <div class="accordion-content">
                            <p>For international flights, it is recommended to arrive at the airport 4 (four) hours before the scheduled departure time of your flight. For domestic flights, this duration is 3 (three) hours.</p>
                            <p>Check-in counters close 60 minutes before departure for domestic flights and 90 minutes before departure for international flights.</p>
                        </div>
                        
                        <button class="accordion-btn">What is the purpose of checking the passengers' passports and visas?</button>
                        <div class="accordion-content">
                            <p>According to aviation rules, passengers are responsible for obtaining information and valid documents for the country they are traveling to. Passport-Visa checks are controlled at the time of check-in and during boarding. The aim of these checks is to prevent passengers from traveling with invalid/faulty visas or passports, hence preventing them from deportation and paying steep penalties.</p>
                        </div>
                        
                        <button class="accordion-btn">Do you have control “ID check” for domestic flights?</button>
                        <div class="accordion-content">
                            <p>Yes. Passengers have to carry their identification card, driving license, or passport with them.</p>
                        </div>
                    </div>
                `;

        case 'onBoard':
            return `
                    <div class="accordion">
                        <button class="accordion-btn">Can I smoke in the aircraft?</button>
                        <div class="accordion-content">
                            <p>All Skyline flights are Non-smoking flights.</p>
                        </div>
                        
                        <button class="accordion-btn">Can I use the lavatory in the business class section?</button>
                        <div class="accordion-content">
                            <p>When business class passengers are on board, the lavatory is used by the business class passengers only.</p>
                        </div>
                        
                        <button class="accordion-btn">Can I sit in the business class section?</button>
                        <div class="accordion-content">
                            <p>Since business class is a different class and a different airfare is paid for its ticket, the cabin attendant has no authority to upgrade economy class passengers.</p>
                        </div>
                        
                        <button class="accordion-btn">Why can’t I sit together with my family?</button>
                        <div class="accordion-content">
                            <p>You need to make your request at the reservation (at the sales office, via the call center, on the website for online booking, or through your travel agent in case you use one.) Requests made at the check-in point are subject to the availability of the seats left in the aircraft.</p>
                        </div>
                        
                        <button class="accordion-btn">Why are we still waiting for the aircraft to take off?</button>
                        <div class="accordion-content">
                            <p>Due To:</p>
                            <ul>
                                <li>The Late Arrival Of A Connecting Flight</li>
                                <li>Restrictions of Air Traffic</li>
                                <li>A Last Minute Technical Incident</li>
                                <li>Operational Reasons</li>
                                <li>Security Check</li>
                                <li>Baggage Loading</li>
                            
                            </ul>
                        </div>
                    </div>
                `;
        default:
            return '';
    }
}
