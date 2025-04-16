function getMenuTemplate(menuIndex) {
    return `<div id="menu${menuIndex}" class="menu0 menu-box">
                            <div class="menu-top">
                                <h2 id="name${menuIndex}">${myDishes[menuIndex].name}</h2>
                                <img src="./assets/icons/plus-circle-regular-24.png" alt="">
                            </div>
                            <div id="description${menuIndex}" class="description">
                            ${myDishes[menuIndex].description}
                            </div>
                            <div id="price${menuIndex}" class="price">${myDishes[menuIndex].price}</div>
                        </div>`
}
