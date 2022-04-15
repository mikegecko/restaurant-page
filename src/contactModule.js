const contactModule = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('page-container');
    const contactBox = document.createElement('div');
    contactBox.classList.add('menu-box');
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";
    contactBox.appendChild(contactHeader);
    const contactObjects = [];
    function ContactInfo(name,phone,email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    };
    const store = new ContactInfo('Store', '555-555-5555', 'reallyrealemail@notfake.com');
    const manager = new ContactInfo('Manager', '555-555-5554', 'totallyrealemail@notfake.com');
    const chef = new ContactInfo('Chef', '555-555-5553', 'perfectlyrealemail@notfake.com');
    contactObjects.push(store);
    contactObjects.push(manager);
    contactObjects.push(chef);
    contactObjects.forEach(element => {
        let elementToAdd = document.createElement('h3');
        elementToAdd.textContent = element.name;
        contactBox.appendChild(elementToAdd);
        let elementphone = document.createElement('p');
        let elementemail = document.createElement('p');
        elementphone.textContent = element.phone;
        contactBox.appendChild(elementphone);
        elementemail.textContent = element.email;
        contactBox.appendChild(elementemail);
    });
    contactContainer.appendChild(contactBox);
    return contactContainer;
}
export{contactModule};