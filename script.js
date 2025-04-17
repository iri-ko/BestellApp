const myDishes = [
    {
        name: "Ramen mit Gemüse",
        description: "Eine köstliche Schüssel Ramen mit frischem Gemüse und aromatischer Brühe.",
        price: 12.50,
        amount: 0
    },
    {
        name: "Sushi Mix Platte",
        description: "Eine Auswahl der besten Sushi-Rollen, frisch und köstlich.",
        price: 19.90,
        amount: 0
    },
    {
        name: "Teriyaki-Hühnchen",
        description: "Gegrilltes Hühnchen mit süßer und würziger Teriyaki-Sauce, serviert mit Reis.",
        price: 14.20,
        amount: 0
    },
    {
        name: "Miso Suppe",
        description: "Traditionelle japanische Suppe mit Miso, Tofu und Algen.",
        price: 6.80,
        amount: 0
    },
    {
        name: "Matcha-Eis",
        description: "Erfrischendes grünes Tee-Eis für einen süßen Abschluss.",
        price: 4.90,
        amount: 0
    }
];

function init(){
    renderMenu();
}

function renderMenu(){
    const menuContentRef = document.getElementById('menu-content'); //access menu container
    menuContentRef.innerHTML= "";
    for (let menuIndex = 0; menuIndex < myDishes.length; menuIndex++) {
        menuContentRef.innerHTML+= getMenuTemplate(menuIndex);
        const priceRef = document.getElementById(`price${menuIndex}`);
        priceRef.innerHTML = `${getPrice(menuIndex)} €`;
    }
}

//show correct price(comma instead of point)
function getPrice(priceIndex){
    let price = myDishes[priceIndex].price;
    price = price.toFixed(2);
    price = price.toString(); 
    price = price.replace(".", ",")
    return price
}

function addDishToBasket(dishIndex){
    const newAmount = addToAmount(dishIndex);
    renderBasketItem(dishIndex, newAmount)
}

function addToAmount(amountIndex){
    const newAmount = myDishes[amountIndex].amount += 1; //adds plus 1 to amount
    return newAmount
}

function renderBasketItem() {
    const basketContentRef = document.getElementById('basket-content');
    basketContentRef.innerHTML = ""; // clear basket to avoid double rendering

    for (let basketItemIndex = 0; basketItemIndex < myDishes.length; basketItemIndex++) {
        if (myDishes[basketItemIndex].amount > 0) { //check if item amount is greater than 0,
            basketContentRef.innerHTML += getBasketItemTemplate(basketItemIndex);
        }
    }
}
