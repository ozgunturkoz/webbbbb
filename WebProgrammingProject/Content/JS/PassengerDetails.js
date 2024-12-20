function validateForm() {
	//Validation of username and name values.
	var firstName = document.forms['form1'][0].value;
	var lastName = document.forms['form1'][1].value;
	if (firstName == null || firstName == "") {
		alert("The First Name field cannot be left blank.");
		return false;
	}
	if (lastName == null || lastName == "") {
		alert("The Last Name field cannot be left blank.");
		return false;
	}

	//Validation of Email value.
	var email = document.forms['form2'][4].value;
	if (email == null || email == "") {
		alert("The Email field cannot be left blank.");
		return false;
	}

}

continueBtn.onclick = function () {
	if (document.forms[0].viaSMS.checked == true)
		alert("Via SMS is selected.")
	if (document.forms[0].viaEmail.checked == true)
		alert("Via Email is selected.")
}

/* tc vatandaþlarý için tc kutusu açma yeri*/
function toggleTCInput() {
	var tcInput = document.getElementById('TCno');
	var turkishCitizenLabel = document.getElementById('turkishCitizenLabel');
	var tcRow = document.getElementById('tcRow');

	if (document.getElementById('turkishCitizen').checked) {
		tcInput.disabled = false;
		turkishCitizenLabel.style.display = 'none';
		tcRow.style.display = 'table-row'; // Show the TC No input row
	} else {
		tcInput.disabled = true;
		tcInput.value = ''; // Reset the value when disabled
		turkishCitizenLabel.style.display = 'inline'; // Show the label
		tcRow.style.display = 'none'; // Hide the TC No input row
	}
}

/*function getSelectedGender() {
	var selectedGender = document.querySelector('input[name="gender"]:checked').value;
	document.getElementById('result').innerText = 'Selected Gender: ' + selectedGender;
  }*/

/*  function toggleTCInput() {
	var tcRow = document.getElementById("tcRow");
	var turkishCitizenCheckbox = document.getElementById("turkishCitizen");
	
	tcRow.style.display = turkishCitizenCheckbox.checked ? "table-row" : "none";
}*/

function validateForm2() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("tel").value;
	var tcCheckbox = document.getElementById("turkishCitizen");
	var tcNumber = document.getElementById("TCno").value;



	// Basit bir e-posta doðrulama
	var emailPattern = /^\S+@\S+\.\S+$/;
	if (!emailPattern.test(email)) {
		alert("Invalid email address");
		return false;
	}

	// Basit bir telefon numarasý doðrulama
	var phonePattern = /^[0-9]{10}$/;
	if (!phonePattern.test(phoneNumber)) {
		alert("Invalid phone number");
		return false;
	}

	// Türk vatandaþý seçiliyse, TC NO kontrolü yap
	if (tcCheckbox.checked && tcNumber.length !== 11) {
		alert("Please enter a valid TC NO");
		return false;
	}


}