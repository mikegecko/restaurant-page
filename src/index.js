//Imports
import './style.css';
import SidebarImage from './spaceinvaders-sidebar.png';
import {
    homeModule
} from './homeModule';
import {
    menuModule
} from './menuModule';
const content = document.getElementById('content');

function pageLoadModule() {
    //Create header
    const header = document.createElement('div');
    header.classList.add('header');
    const headerContent = document.createElement('p');
    headerContent.textContent = "8-Bit Bar";
    header.appendChild(headerContent);
    content.appendChild(header);
    //Create tabs
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const homeTab = document.createElement('div');
    homeTab.id = 'home'
    homeTab.innerText = 'Home';
    const menuTab = document.createElement('div');
    menuTab.id = 'menu'
    menuTab.innerText = 'Menu';
    const contactTab = document.createElement('div');
    contactTab.id = 'contact';
    contactTab.innerText = 'Contact';
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    content.appendChild(tabs);
    //Create sidebar images
    const sidebarL = new Image();
    const sidebarR = new Image();
    sidebarL.src = SidebarImage;
    sidebarR.src = SidebarImage;
    sidebarL.classList.add('img-left');
    sidebarR.classList.add('img-right');
    content.appendChild(sidebarL);
    content.appendChild(sidebarR);
    console.log('Loaded');

    homeTab.addEventListener('click', moduleController);
    menuTab.addEventListener('click', moduleController);
    contactTab.addEventListener('click', moduleController);
    return;
}

pageLoadModule();
//content.appendChild(homeModule());

function moduleController(e) {
    //Wipes existing children from content div
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    //This is hacky...
    pageLoadModule();
    //Calls appropriate module and appends it to DOM
    if (e.target.id == 'home') {
        content.appendChild(homeModule());
    }
    if (e.target.id == 'menu') {
        content.appendChild(menuModule());
    }
    if (e.target.id == 'contact') {
        console.log('load contact');
    }
}