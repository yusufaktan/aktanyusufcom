document.addEventListener('DOMContentLoaded', () => {
	const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
	if(darkModeEnabled) {
		document.body.classList.add('dark-mode');
		document.getElementById('themeToggle').checked = true;
	}
});
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
	if(themeToggle.checked) {
		document.body.classList.add('dark-mode');
		localStorage.setItem('darkMode', 'enabled');
	} else {
		document.body.classList.remove('dark-mode');
		localStorage.setItem('darkMode', 'disabled');
	}
});