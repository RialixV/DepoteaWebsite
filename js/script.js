
//HAMBURGER MENU TOGGLER

$(document).ready(function () {
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#fullnav').toggleClass('open');
	});
});