// start js code
function totalAll() {
    let bestPrice = document.getElementById('best-price');
    let bestInnerText = parseInt(bestPrice.innerText);

    let extraMemoryCost = document.getElementById('extra-memory-cost');
    let memoryInnerText = parseInt(extraMemoryCost.innerText);

    let extraStorageCost = document.getElementById('extra-storage-cost');
    let storageInnerText = parseInt(extraStorageCost.innerText);

    let deliveryCharge = document.getElementById('delivery-charge');
    let delivaryInnerText = parseInt(deliveryCharge.innerText);

    let AddAll = bestInnerText + memoryInnerText + storageInnerText + delivaryInnerText;

    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = AddAll;

    let afterPromoTotal = document.getElementById('after-promo-total');
    afterPromoTotal.innerText = AddAll;
}

// product function
function productsHare(productsText, cost) {
    let productHare = document.getElementById(productsText);
    let productHareInnerText = parseInt(productHare.innerText = cost);
    totalAll();
}
 
// discount promo function
function promocode() {
    let inputHareID = document.getElementById('inputHareID');
    let inputHareIDValue = inputHareID.value;
    inputHareID.value = '';
    if(inputHareIDValue == 'stevekaku') {
         let afterPromoTotal = document.getElementById('after-promo-total');
         let afterPromoTotalInnerTex = parseInt(afterPromoTotal.innerText);
         let discount = afterPromoTotalInnerTex / 100 * 20;
         afterPromoTotal.innerText = afterPromoTotalInnerTex - discount;
    }
}

// all functional caller 
document.getElementById('8gb').addEventListener('click', function() {
    productsHare('extra-memory-cost', 0);
});

document.getElementById('16gb').addEventListener('click', function() {
    productsHare('extra-memory-cost', 180);
});

document.getElementById('256gb').addEventListener('click', function() {
    productsHare('extra-storage-cost', 0);
});

document.getElementById('512gb').addEventListener('click', function() {
    productsHare('extra-storage-cost', 100);
});

document.getElementById('1tb').addEventListener('click', function() {
    productsHare('extra-storage-cost', 180);
});

document.getElementById('free-delivery').addEventListener('click', function() {
    productsHare('delivery-charge', 0);
});

document.getElementById('paid-delivery').addEventListener('click', function() {
    productsHare('delivery-charge', 20);
});