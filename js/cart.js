if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener("click", removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-qty')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('pay-button')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addToCartClicked() {
    var itemTitle = document.getElementsByClassName('shop-item-modal-title')[0].innerText
    var itemPrice = document.getElementsByClassName('shop-item-modal-price')[0].innerText
    var itemImg = document.getElementById('modal-img').getAttribute('src')
    addItemToCart(itemTitle, itemPrice, itemImg)
}

function addItemToCart(itemTitle, itemPrice, itemImg){
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = `
        <div class="row cart-row p-2 bg-white rounded justify-content-center item-card-bg align-items-center p-2 mt-4 px-3">
            <div class="col col-lg-2">
                    <img class="rounded" src="${itemImg}" width="70">
            </div>
            <div class="col">
                <h6 class="item-title">${itemTitle}</h6>
                <div class="col">Size:
                    <span>${activeSize}</span> 
                </div>
                <div class="col">Addon:
                    <span class="addon">${activeAddon}</span>
                </div>
            </div>
            <div class="col"><input class="cart-quantity-input cart-qty" type="number" value="1" min="1" max="20" style="width: 50%;">
            </div>
            <div class="col cart-price">${itemPrice}</div>
            <div class="col"><button class="btn btn-danger">REMOVE</button></div>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-qty')[0].addEventListener('change', quantityChanged)
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    console.log(cartRows)
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        console.log(priceElement)
        var quantityElement = cartRow.getElementsByClassName('cart-qty')[0]
        var price = parseFloat(priceElement.innerText.replace('₱', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(quantity, price)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total
}

var activeAddon = "Pearls"
var activeSize = "Medium"

function addOnClicked(clicked_value){
    var activeAddonValue = clicked_value
    activeAddon = activeAddonValue
}

function sizeClicked (clicked_value){
    var activeSizeValue = clicked_value
    activeSize = activeSizeValue
}

function resetModal(){
    $('#exampleModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
        activeAddon = "Pearls"
        activeSize = "Medium"
    })
}