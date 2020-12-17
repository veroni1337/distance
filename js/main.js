const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function() {
	//console.log('нажатие на кнопку');
	menu.classList.toggle('active');
});