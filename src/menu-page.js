const menuPage = () => {
    const {sectionOne} = itemOne();

    const {sectionTwo} = itemTwo();

    const {sectionThree} = itemThree();
    
    const menu = document.createElement('div');

    menu.classList.add('menuContainer');
    
    const menuTitle = document.createElement('p');

    menuTitle.textContent = "Our options";

    menu.append(menuTitle, sectionOne, sectionTwo, sectionThree);

    return {menu, sectionOne, sectionTwo, sectionThree};
}

const itemOne = () => {
    const sectionOne = document.createElement('ul');

    sectionOne.classList.add('sectionOne');

    const sectionOneTitle = document.createElement('li');
            
    sectionOneTitle.textContent = "All sort of coffee:";

    const coffee01 = document.createElement('li');

        coffee01.textContent = "Espresso";

    const coffee02 = document.createElement('li');

        coffee02.textContent = "Capuccino";

    const coffee03 = document.createElement('li');    

        coffee03.textContent = "Mocha";

    sectionOne.append(sectionOneTitle, coffee01, coffee02, coffee03);

    return {sectionOne};
}

const itemTwo = () => {
    const sectionTwo = document.createElement('ul');

    sectionTwo.classList.add('sectionTwo');

    const sectionTwoTitle = document.createElement('li');

    sectionTwoTitle.textContent = "Exotic combinations:";

    const combo01 = document.createElement('li');

        combo01.textContent = "Roast chicken with coffee sauce";

    const combo02 = document.createElement('li');

        combo02.textContent = "Fish with a bit of powder coffee";

    const combo03 = document.createElement('li');    

        combo03.textContent = "Apple, banana and coffee";

    sectionTwo.append(sectionTwoTitle, combo01, combo02, combo03);

    return {sectionTwo};
}

const itemThree = () => {
    const sectionThree = document.createElement('ul');

    sectionThree.classList.add('sectionThree');

    const sectionThreeTitle = document.createElement('li');

    sectionThreeTitle.textContent = "Cakes:";

    const cake01 = document.createElement('li');

        cake01.textContent = "Coffee cake";

    const cake02 = document.createElement('li');

        cake02.textContent = "Chocolate Coffee Cake";

    const cake03 = document.createElement('li');    

        cake03.textContent = "Moist Coffee Loaf Cake";

    sectionThree.append(sectionThreeTitle, cake01, cake02, cake03);

    return {sectionThree};
}
export default menuPage;