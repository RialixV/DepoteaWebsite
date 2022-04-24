
function clearLocalStorage() {
	localStorage.clear();
	checkCartLocalStorage();
}

//HAMBURGER MENU TOGGLER

$(function () {
	$(".navbarMenuToggle").click(function() {
		$(".fullnavBtn").toggleClass("active");
		$("#fullnav").toggleClass("open");
	});
	
	$(".navbarMenuClose").click(function() {
		$(".fullnavBtn").removeClass("active");
		$("#fullnav").removeClass("open");
	});
		//INITIAL LOAD
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
			loadCartModal();
		}
	};

	xhttp.open("GET", "src/mainpage.html", true);
	xhttp.send();
});

//VIDEO SLIDESHOW data-bs-toggle="modal" data-bs-target="#menu-item-modal"


//AJAX PAGE LOADER

function loadMainPage() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
		}
	};
	
	xhttp.open("GET", "src/mainpage.html", true);
	xhttp.send();
}

function linktoMilkTea() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
	
			loadMilkTea();
		}
	};
	
	xhttp.open("GET", "src/menu.html", true);
	xhttp.send();
}
function linktoFruitTea() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
	
			loadFruitTea();
		}
	};
	
	xhttp.open("GET", "src/menu.html", true);
	xhttp.send();
}

function linktoSnacks() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
	
			loadSnacks();
		}
	};
	
	xhttp.open("GET", "src/menu.html", true);
	xhttp.send();
}
function linktoRiceMeals() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
	
			loadRiceMeals();
		}
	};
	
	xhttp.open("GET", "src/menu.html", true);
	xhttp.send();
}