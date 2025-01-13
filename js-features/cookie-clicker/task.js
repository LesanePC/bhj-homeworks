const cookie = document.getElementById('cookie');
const counterDisplay = document.getElementById('clicker__counter');

let counter = 0;

cookie.onclick = function() {
	counter++;

	counterDisplay.textContent = counter;
	if (counter % 2 === 0) {
		cookie.width = 220;
		cookie.height = 220;
	} else {
		cookie.width = 200;
		cookie.height = 200;
	}
};