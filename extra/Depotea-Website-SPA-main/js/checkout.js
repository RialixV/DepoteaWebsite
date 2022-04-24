
/* LOAD PAGE */

function loadCheckout() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("index-body-container").innerHTML = this.responseText;
			$('.cart-icon-container').hide();
			$('.cart-icon-container-open').hide();
			$('#cart-modal-body').empty();
			checkCartLocalStorage();
			
			const targetNode = document.getElementById('index-body-container');
			const config = { childList: true };
			
			let observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					let oldValue = mutation.oldValue;
					let newValue = mutation.target.textContent;
					if (oldValue !== newValue) {
						$('.cart-icon-container').show();
						$('.cart-icon-container-open').show();
						loadCartModal();
						observer.disconnect();
					}
				});
			});
			
			observer.observe(targetNode, config);
		}
	};
	
	xhttp.open("GET", "src/checkout.html", true);
	xhttp.send();
}

/* SUMMARY */

function getQuantityCount() {
	var cartItemsLength = $('.cart-item').length;
	var itemQuantityTotal = 0;
	
	for (var i = 0; i < cartItemsLength; i++) {
		var itemQuantity = parseInt($($('.cart-product-quantity')[i]).val());
		itemQuantityTotal += itemQuantity;
	}
	
	$('#checkout-form-cart-quantity').text(itemQuantityTotal);
}

function getCartSubTotal() {
	var cartItemsLength = $('.cart-item').length;
	var subTotal = 0;
	
	for (var i = 0; i < cartItemsLength; i++) {
		var cartItemsPrice = parseInt($($('.cart-item-price')[i]).text().slice(1));
		subTotal += cartItemsPrice;
	}
	
	$('#cart-subtotal').text('₱' + subTotal);
}

function getTotalPrice() {
	var subTotal = parseInt($('#cart-subtotal').text().slice(1));
	var shippingFee = parseInt($('#shipping-fee').text().slice(1));
	var totalPrice = subTotal + shippingFee;
	
	$('#cart-total-price').text('₱' + totalPrice);
}

/* CHECKOUT FORM */

function claimOption() {
	var shippingFee;
	
	if ($('#claim-delivery').is(':checked')) {
		shippingFee = 30;
		$('#shipping-fee').text('₱' + shippingFee);
		
		$('.payment-methods > label').removeAttr("style");
		$('[name="payment-method"]').prop("checked", false);
		
		$('#payment-cod').prop('disabled', false);
		
		$('#payment-gcash').prop('disabled', false);
	}
	else {
		shippingFee = 0;
		$('#shipping-fee').text('₱' + shippingFee);
		
		$('.payment-methods > label').removeAttr("style");
		$('[name="payment-method"]').prop("checked", false);
		
		$('#payment-cod').prop('disabled', true);
		$('#payment-cod:disabled ~ label').css("color", "#bbb");
			
		$('#payment-gcash').prop('disabled', false);
	}
	
	getTotalPrice();
}

function checkoutFormInvalid(invalidInput) {
	$('#checkout-form-invalid').modal("show");
	
	if ($(invalidInput).is("[name='claim-option']")){
		$('#checkout-form-invalid p').text('Please select a claiming option.');
	}
	else if ($(invalidInput).is("[name='payment-method']")){
		$('#checkout-form-invalid p').text('Please select a payment method.');
	}
	else if (invalidInput === 'lowOrder'){
		$('#checkout-form-invalid p').html('Please have a minimum order worth <strong>₱150</strong>.');
	}
	else if (invalidInput === 'tempSubmitSuccess') {
		$('#checkout-form-invalid p').html('<strong>ORDER PLACED</strong>');
	}
}

function contactNoFormat(contactNoInput) {
	var contactNoReplace = $(contactNoInput).val().replace(/\D/g,''); 
	
	if ($(contactNoInput).val() === '(') {
		$(contactNoInput).val('');
	}
	if ($(contactNoInput).val().length > 0) {
		$(contactNoInput).val('(' + contactNoReplace.substring(0,4));
	}
	if ($(contactNoInput).val().length >= 5) {
		$(contactNoInput).val($(contactNoInput).val() + ') ' + contactNoReplace.substring(4,7));
	}
	if ($(contactNoInput).val().length >= 10) {
		$(contactNoInput).val($(contactNoInput).val() + '-' + contactNoReplace.substring(7,11)); 
	}
}