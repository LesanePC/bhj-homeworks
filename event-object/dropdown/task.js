const dropdownElement = document.getElementsByClassName('dropdown__value')[0]
dropdownElement.addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementsByClassName('dropdown__list')[0].classList.toggle('dropdown__list_active')
	const items = document.getElementsByClassName('dropdown__item')
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('click', function(event) {
			event.preventDefault();
			const selectedItem = event.target.closest('.dropdown__item');
			if (selectedItem) {
				const itemText = selectedItem.querySelector('a')?.textContent || selectedItem.textContent;
				selectedItem.parentNode.previousElementSibling.innerHTML = itemText;
				document.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active');
			}
		})
	}
})