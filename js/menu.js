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

var lastSize = 70
var lastAddon = 0

function ItemSizePriceUpdate(clicked_id){
    var ActiveID = clicked_id
    console.log(ActiveID)
    switch (ActiveID){
		case "flexRadioDefault7":
			switch (lastAddon){
				case 0:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱70"
					lastSize = 70
					break;
				case 10:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱80"
					lastSize = 70
					break;
				case 15:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱85"
					lastSize = 70
					break;
				case 20:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱90"
					lastSize = 70
					break;
				case 30:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱100"
					lastSize = 70
					break;
			}
			break;
		case "flexRadioDefault8":
			switch (lastAddon){
				case 0:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱80"
					lastSize = 80
					break;
				case 10:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱90"
					lastsize = 80
					break;
				case 15:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱95"
					lastSize = 80
					break;
				case 20:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱100"
					lastsize = 80
					break;
				case 30:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱110"
					lastsize = 80
					break;
			}
			break;
	}	
}

function addOnPriceUpdate(clicked_id) {
	var addonIdClicked = clicked_id
    console.log(addonIdClicked)
	switch (addonIdClicked){
		case "flexRadioDefault":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱70"
					lastAddon = 0
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱80"
					lastAddon = 0
					break;
			}
            break;
        case "flexRadioDefault1":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱90"
					lastAddon = 20
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱100"
					lastAddon = 20
					break;
			}
            break;
		case "flexRadioDefault2":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱100"
					lastAddon = 30
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱110"
					lastAddon = 30
					break;
			}
            break;
		case "flexRadioDefault3":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱90"
					lastAddon = 20
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱100"
					lastAddon = 20
					break;
			}
            break;
		case "flexRadioDefault4":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱85"
					lastAddon = 15
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱95"
					lastAddon = 15
					break;
			}
            break;
		case "flexRadioDefault5":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱85"
					lastAddon = 15
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱95"
					lastAddon = 15
					break;
			}
            break;
		case "flexRadioDefault6":
			switch (lastSize){
				case 70:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱80"
					lastAddon = 10
					break;
				case 80:
					document.getElementsByClassName('shop-item-modal-price')[0].innerText = "₱90"
					lastAddon = 10
					break;
			}
            break;
    }
}

function resetModal(){
    $('#exampleModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
        lastSize = 70
        lastAddon = 0
    })
}