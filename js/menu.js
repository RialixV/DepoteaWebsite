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
    document.getElementsByClassName('shop-item-modal-price')[0].innerText = priceElement
    document.getElementsByClassName('shop-item-modal-title')[0].innerText = titleElement

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

function ItemSizePriceUpdate(clicked_id){
    var ItemsizeLarge = document.getElementById('flexRadioDefault8')
    var modalParent = ItemsizeLarge.parentElement.parentElement.parentElement.parentElement
    var ActiveID = clicked_id
    console.log(ActiveID)
    switch (ActiveID){
        case "flexRadioDefault7":
        modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + '70'
        break;
        case "flexRadioDefault8":
        modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + '80'
        break;
    }
}

function addOnPriceUpdate(clicked_id){
    var sinkersElement = document.getElementById('flexRadioDefault1')
    var modalParent = sinkersElement.parentElement.parentElement.parentElement.parentElement
    var ActiveId = clicked_id
    var itemprice = modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText
    var price = parseFloat(itemprice.replace('₱', ''))
    console.log(price)
    switch (ActiveId){
        case "flexRadioDefault1":
            var totalprice = price + 20
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice
            break;
            case "flexRadioDefault2":
            totalprice = price + 30
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice 
            break;
            case "flexRadioDefault3":
            totalprice = price + 2
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice 
            break;
            case "flexRadioDefault4":
            totalprice = price
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice 
            break;
            case "flexRadioDefault5":
            totalprice = price
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice
            break;
            case "flexRadioDefault6":
            totalprice = price
            modalParent.getElementsByClassName('shop-item-modal-price')[0].innerText = '₱' + totalprice
            break;
    }

}

function resetModal(){
    $('#exampleModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');

    })
}