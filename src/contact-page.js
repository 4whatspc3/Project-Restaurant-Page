const contactPage = () => {
    const contact = document.createElement('div');

    contact.classList.add('contactContainer');
    
    const contactTitle = document.createElement('p');

    contactTitle.textContent = "Contact Us";

    const phoneNumber = document.createElement('p');

    phoneNumber.textContent = "30 3030-3030";

    const email = document.createElement('p');

    email.textContent = "cafe@coffee.com";

    contact.append(contactTitle, phoneNumber, email);

    return {contact};
}

export default contactPage;