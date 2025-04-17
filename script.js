const myDishes = [
    {
        name: "Ramen mit Gemüse",
        description:
            "Eine köstliche Schüssel Ramen mit frischem Gemüse und aromatischer Brühe.",
        price: 12.5,
        amount: 0,
    },
    {
        name: "Sushi Mix Platte",
        description:
            "Eine Auswahl der besten Sushi-Rollen, frisch und köstlich.",
        price: 19.9,
        amount: 0,
    },
    {
        name: "Teriyaki-Hühnchen",
        description:
            "Gegrilltes Hühnchen mit süßer und würziger Teriyaki-Sauce, serviert mit Reis.",
        price: 14.2,
        amount: 0,
    },
    {
        name: "Miso Suppe",
        description: "Traditionelle japanische Suppe mit Miso, Tofu und Algen.",
        price: 6.8,
        amount: 0,
    },
    {
        name: "Matcha-Eis",
        description: "Erfrischendes grünes Tee-Eis für einen süßen Abschluss.",
        price: 4.9,
        amount: 0,
    },
];

let baskedDishes =  [];

function init() {
    renderMenu();
    updateCurrentSum();
    updateTotalSum();
}

function renderMenu() {
    const menuContentRef = document.getElementById("menu-content"); //access menu container
    menuContentRef.innerHTML = "";
    for (let menuIndex = 0; menuIndex < myDishes.length; menuIndex++) {
        menuContentRef.innerHTML += getMenuTemplate(menuIndex);
        const priceRef = document.getElementById(`price${menuIndex}`);
        priceRef.innerHTML = `${getPrice(menuIndex)} €`;
    }
}

//show correct price(comma instead of point)
function getPrice(priceIndex) {
    let price = myDishes[priceIndex].price;
    price = price.toFixed(2);
    price = price.toString();
    price = price.replace(".", ",");
    return price;
}

function addDishToBasket(dishIndex) {
    const newAmount = addToAmount(dishIndex);
    if (!baskedDishes.includes(myDishes[dishIndex])) {
        baskedDishes.push(myDishes[dishIndex]);
    }
    renderBasketItem(newAmount);
    updateCurrentSum();
    updateTotalSum();
}

function addToAmount(amountIndex) {
    const newAmount = (myDishes[amountIndex].amount += 1); //adds plus 1 to amount
    return newAmount;
}

function substractFromAmount(amountIndex) {
    const newAmount = (myDishes[amountIndex].amount += -1); //adds plus 1 to amount
    return newAmount;
}

function renderBasketItem() {
    const basketContentRef = document.getElementById("basket-content");
    basketContentRef.innerHTML = ""; // clear basket to avoid double rendering
    if (baskedDishes.length == 0){
        basketContentRef.innerHTML = "Füge dein Lieblingsessen hinzu!"
    }

    for (
        let basketItemIndex = 0;
        basketItemIndex < myDishes.length;
        basketItemIndex++
    ) {
        if (myDishes[basketItemIndex].amount > 0) {//check if item amount is greater than 0, only then render into basket
            basketContentRef.innerHTML += getBasketItemTemplate(basketItemIndex);
        }
    }
}

function getUpdatedPrice(basketItemIndex) {
    const uptadedPrice =
        myDishes[basketItemIndex].price * myDishes[basketItemIndex].amount;
    return uptadedPrice.toFixed(2).replace(".", ","); //return price but as string and with , instead of .
}

function amountPlus(plusItemIndex) {
    addToAmount(plusItemIndex); //amount plus 1

    updateTotalItemAmount(plusItemIndex); //show new amount
    updateTotalItemPrice(plusItemIndex); //show newly calculated price
    updateCurrentSum();
    updateTotalSum();
}

function amountMinus(minusItemIndex) {
    substractFromAmount(minusItemIndex); //amount minus 1
    

    updateTotalItemAmount(minusItemIndex); //show new amount
    updateTotalItemPrice(minusItemIndex); //show newly calculated price

    if (myDishes[minusItemIndex].amount == 0) {
        baskedDishes.splice(minusItemIndex, 1);
        deleteItem(minusItemIndex);
    }

    updateCurrentSum();
    updateTotalSum();
}

function updateTotalItemPrice(totalItemPriceIndex) {
    const bpriceRef = document.getElementById(`bprice${totalItemPriceIndex}`); //access baskedprice element
    bpriceRef.innerHTML = `${getUpdatedPrice(totalItemPriceIndex)} €`; //update to current
}

function updateTotalItemAmount(totalItemAmountIndex) {
    const bamountRef = document.getElementById(`amount${totalItemAmountIndex}`); //access basket amount element
    bamountRef.innerHTML = `${myDishes[totalItemAmountIndex].amount}`; //update to show current
}

function deleteItem(deleteIndex) {
    myDishes[deleteIndex].amount = 0; //sets the amount directly to 0
    baskedDishes = [];
    renderBasketItem(deleteIndex); //renders whole container new, and since this item now has amouunt of 0, it won't render
    updateCurrentSum();
    updateTotalSum();
}

function updateCurrentSum() {
    const currentSumRef = document.getElementById(`current-sum`);
    currentSumRef.innerHTML = "";
    currentSumRef.innerHTML = calcCurrentSum().toFixed(2).replace(".", ",") + " €";
}

function calcCurrentSum() {
    let currentPrice = 0;

    for (let sumIndex = 0; sumIndex < myDishes.length; sumIndex++) {
        currentPrice += myDishes[sumIndex].price * myDishes[sumIndex].amount;
    }
    return currentPrice;
}

function updateTotalSum() {
    const totalSumRef = document.getElementById(`total-sum`);
    totalSumRef.innerHTML = "";
    const totalSum = calcCurrentSum() + 2.99;
    totalSumRef.innerHTML = totalSum.toFixed(2).replace(".", ",") + " €";
}

function toggleConfirmationVisibility(){
    const confirmationRef = document.getElementById('order-confirmation');
    confirmationRef.classList.toggle('d-none');
    confirmationRef.classList.toggle('d-flex');
}

function order(){
    clearBasket();
    toggleConfirmationVisibility();
}

function clearBasket(){
    for (let clearIndex = 0; clearIndex < myDishes.length; clearIndex++) {
        myDishes[clearIndex].amount = 0;        
    }
    renderBasketItem();
    updateCurrentSum();
    updateTotalSum();
    toggleConfirmationVisibility();
}

function toggleResponsiveBasket(){
    const basketRef = document.getElementById('obasket');
    basketRef.classList.toggle('mb-d-none');
}