//Imports
import './style.css';
import SidebarImage from './spaceinvaders-sidebar.png';
const content = document.getElementById('content');

function pageLoad(){
    const element = document.createElement('div');
    console.log('Loaded');
    const sidebarL = new Image();
    const sidebarR = new Image();
    sidebarL.src = SidebarImage;
    sidebarR.src = SidebarImage;
    sidebarL.classList.add('img-left');
    sidebarR.classList.add('img-right');
    element.appendChild(sidebarL);
    element.appendChild(sidebarR);
    return element;
}
content.appendChild(pageLoad());