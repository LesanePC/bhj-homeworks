let arrTabs = Array.from(document.getElementsByClassName('tab'));
let arrContents = Array.from(document.getElementsByClassName('tab__content'));

arrTabs.forEach((el, el2) => {
	el.addEventListener('click', function(event) {
		const index = arrTabs.findIndex(el => el.className.includes('tab_active'));

		if (index === -1) {
			return;
		}

		arrContents[index].classList.remove('tab__content_active');
		arrTabs[index].classList.remove('tab_active');


		event.target.classList.add('tab_active');
		arrContents[el2].classList.add('tab__content_active');
	});
});