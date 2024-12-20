const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function toggleContent() {
	var hiddenContent = document.querySelector('.hidden-content');
	hiddenContent.style.height = hiddenContent.offsetHeight === 0 ? hiddenContent.scrollHeight + "px" : 0;
}

function hideContent() {
	var hiddenContent = document.querySelector('.hidden-content');
	hiddenContent.style.height = 0;
}

function enableOption(disabledOption) {

	var selectedOption = document.querySelector('input[name="gender_option"]:checked').id;

	document.getElementById(disabledOption).disabled = (selectedOption === disabledOption);
}
