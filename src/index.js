import titlePage from "./title-page";

import buttonsPage from "./buttons-page";

import homePage from "./home-page";

import menuPage from "./menu-page";

import contactPage from "./contact-page";

const component = () => {
    const {title} = titlePage();
    
    const {buttons} = buttonsPage();

    const {home} = homePage();

    const {menu} = menuPage();

    const {contact} = contactPage();

    return {title, buttons, home, menu, contact};
}

const page = component();

function empty(element) {
    element.replaceChildren(); 
}

const body = document.querySelector('body');

body.prepend(page.title, page.buttons);

const content = document.querySelector('#content');

content.append(page.home);

const button = document.querySelectorAll('button');

button.forEach(btn => {
    btn.addEventListener('click', (e) => {                

        empty(content);

        if(e.target.matches('.btn00')){
            content.append(page.home);
        }

        if(e.target.matches('.btn01')){
            content.append(page.menu);
        }

        if(e.target.matches('.btn02')){
            content.append(page.contact);
        }
    })
});