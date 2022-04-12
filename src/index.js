//Imports
import './style.css';
import SidebarImage from './spaceinvaders-sidebar.png';


function pageLoadModule(){
    const content = document.getElementById('content');
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
    return;
}
pageLoadModule();