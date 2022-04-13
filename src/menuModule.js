const menuModule = () => {
    const menuContainer = document.createElement('div');
    const drinkContainer = document.createElement('div');
    const specialContainer = document.createElement('div');
    const maindishContainer = document.createElement('div');
    const sideContainer = document.createElement('div');
    menuContainer.classList.add('page-container');
    drinkContainer.classList.add('menu-box');
    specialContainer.classList.add('menu-box');
    maindishContainer.classList.add('menu-box');
    sideContainer.classList.add('menu-box');
    //Add drinks
    const drinks = ["Link's Elixer", "Portal shots", "Sonic shot", "Halo Red & Blue shot", "Kirby cocktail", "Bulbasaur fruit punch", "Shirley Templar", "Articuno Cocktail"];
    const drinkHeader = document.createElement('h1');
    drinkHeader.textContent = "Drinks";
    drinkContainer.appendChild(drinkHeader);
    drinks.forEach(element => {
        let drinkToAdd = document.createElement('p');
        drinkToAdd.textContent = element;
        drinkContainer.appendChild(drinkToAdd);
    });
    //Add specials
    const specials = ["Pac-man soup", "Mario Mushroom stew", "Portal cake", "Pokeball cookies"];
    const specialHeader = document.createElement('h1');
    specialHeader.textContent = "Specials";
    specialContainer.appendChild(specialHeader);
    specials.forEach(element => {
        let specialToAdd = document.createElement('p');
        specialToAdd.textContent = element;
        specialContainer.appendChild(specialToAdd);
    });
    //Add main dishes
    const breakfast = ["Flying saucer Pancakes", "Chorus fruit salad", "Creamy Crustacean Omelette"];
    const lunch = ["Overcooked burritos", "Cluckin' Bell Chicken", "Puppy Paw Hashbrowns", "Pizza", "Tofu stir fry"];
    const dinner = ["Lava soup", "Pork Cutlets", "Salmon with Mushrooms", "Beef stew", "Pokemon Curry"];
    const maindishHeader = document.createElement('h1');
    maindishHeader.textContent = "Main Dishes";
    maindishContainer.appendChild(maindishHeader);
    const breakfastHeader = document.createElement('h2');
    breakfastHeader.textContent = "Breakfast";
    const breakfastSubHeader = document.createElement('h3');
    breakfastSubHeader.textContent = "Served until 11am";
    maindishContainer.appendChild(breakfastHeader);
    maindishContainer.appendChild(breakfastSubHeader);
    breakfast.forEach(element => {
        let breakfastToAdd = document.createElement('p');
        breakfastToAdd.textContent = element;
        maindishContainer.appendChild(breakfastToAdd);
    });
    const lunchHeader = document.createElement('h2');
    lunchHeader.textContent = "Lunch";
    maindishContainer.appendChild(lunchHeader);
    lunch.forEach(element => {
        let lunchToAdd = document.createElement('p');
        lunchToAdd.textContent = element;
        maindishContainer.appendChild(lunchToAdd);
    });
    const dinnerHeader = document.createElement('h2');
    dinnerHeader.textContent = "Dinner";
    const dinnerSubHeader = document.createElement('h3');
    dinnerSubHeader.textContent = "Served at 4pm";
    maindishContainer.appendChild(dinnerHeader);
    maindishContainer.appendChild(dinnerSubHeader);
    dinner.forEach(element => {
        let dinnerToAdd = document.createElement('p');
        dinnerToAdd.textContent = element;
        maindishContainer.appendChild(dinnerToAdd);
    });
    //Add sides
    const sideHeader = document.createElement('h1');
    const sides = ["French Fires","Buttered Rolls","Halo rings","Bunny Dango"];
    sideHeader.textContent = "Sides";
    sideContainer.appendChild(sideHeader);
    sides.forEach(element => {
        let sideToAdd = document.createElement('p');
        sideToAdd.textContent = element;
        sideContainer.appendChild(sideToAdd);
    });
    menuContainer.appendChild(drinkContainer);
    menuContainer.appendChild(specialContainer);
    menuContainer.appendChild(maindishContainer);
    menuContainer.appendChild(sideContainer);
    return menuContainer;
}
export {
    menuModule
};