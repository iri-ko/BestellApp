function getMenuTemplate(menuIndex) {
    return `<div id="menu${menuIndex}" class="menu0 menu-box" onclick="addDishToBasket(${menuIndex})">
                            <div class="menu-top">
                                <h2 id="name${menuIndex}">${myDishes[menuIndex].name}</h2>
                                <img src="./assets/icons/plus-circle-regular-24.png" alt="">
                            </div>
                            <div id="description${menuIndex}" class="description">
                            ${myDishes[menuIndex].description}
                            </div>
                            <div id="price${menuIndex}" class="price">${myDishes[menuIndex].price} &euro;</div>
                        </div>`;
}


function getBasketItemTemplate(basketItemIndex){
    return `<div id="basket-item${basketItemIndex}" class="basket-item">

                            <div id="bname-bprice${basketItemIndex}" class="bname-bprice">
                                <div id="bname${basketItemIndex}" class="bname">
                                    ${myDishes[basketItemIndex].name}
                                </div>
                                <div id="bprice${basketItemIndex}" class="bprice">
                                    ${getUpdatedPrice(basketItemIndex)} &euro;
                                </div>
                            </div>   
                            <div id="order-amount${basketItemIndex}" class="order-amount">
                                <div id="add-substract${basketItemIndex}" class="add-substract">
                                    <img onclick="amountMinus(${basketItemIndex})" src="./assets/icons/minus-circle-regular-24.png">
                                    <div id="amount${basketItemIndex}">${myDishes[basketItemIndex].amount}</div>
                                    <img onclick="amountPlus(${basketItemIndex})" src="./assets/icons/plus-circle-regular-24.png">
                                </div>
                                <img src="./assets/icons/trash-regular-24.png" id="delete" class="delete">
                            </div>
                        </div>`
}