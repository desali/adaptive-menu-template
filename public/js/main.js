window.onload = function() {
	let menu_toggle = document.getElementById("menu-toggle").onclick = function() {
		this.classList.toggle("active");
		let main_menu = document.getElementById("main-menu");
		main_menu.classList.toggle("expanded")
	}
};
