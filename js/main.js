
//HAMBURGER MENU TOGGLER

$(document).ready(function () {
	$('.navbarMenuToggle').click(function() {
		$('.fullnavBtn').toggleClass('active');
		$('#fullnav').toggleClass('open');
	});
});

//AJAX PAGE LOADER

function loadMainpage() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
		}
	};
	
	xhttp.open("GET", "mainpage.html", true);
	xhttp.send();
}

function loadBeverage() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
		}
	};
	
	xhttp.open("GET", "menu.html", true);
	xhttp.send();
}

function loadFood() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
		}
	};
	
	xhttp.open("GET", "menu.html", true);
	xhttp.send();
}