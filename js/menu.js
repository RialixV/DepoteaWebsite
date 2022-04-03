if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var updateModal = document.getElementsByClassName('btn-shop-item')
    for (var i = 0; i < updateModal.length; i++) {
        var button = updateModal[i]
        button.addEventListener("click", function(){
            var menuItem = document.getElementsByClassName('shop-item-title')[0].innerText
            console.log(menuItem)
        })
    }

    var Modalupdate = document.getElementsByClassName('btn-shop-item')
    for (var i = 0; i < Modalupdate.length; i++) {
        var button = Modalupdate[i]
        button.addEventListener('click', modalChange)
    }
}


function modalUpdate(){
    var shopItemContainer = document.getElementsByClassName('shop-items-container')[0]
    var shopRows = shopItemContainer.getElementsByClassName('shop-item-row')[0]
    var shopColumns = shopRows.getElementsByClassName('shop-item-column')
    button.addEventListener("click", function(){
    console.log(shopColumns)
    })
}

function modalChange(event) {
    var button = event.target
    var shopItem = button.parentElement
    console.log(shopItem)
    var titleElement = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var priceElement = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    document.getElementsByClassName('shop-item-modal-title')[0].innerText = titleElement
    document.getElementsByClassName('shop-item-modal-price')[0].innerText = priceElement
    var modalImg = document.getElementById('modal-img').src
    switch (titleElement) {
        case "Mocha":
            document.getElementById('modal-img').src = "https://i.imgur.com/VHkw3UU.jpeg"
            break
        case "Okinawa":
            document.getElementById('modal-img').src = "https://i.imgur.com/OcGmh5H.jpeg"
            break
    }
    console.log(titleElement)
}

function updateItemTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    console.log(cartRows)
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-qty')[0]
        var price = parseFloat(priceElement.innerText.replace('₱', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total
}