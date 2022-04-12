//Imports
import './style.css';
import SidebarImage from './spaceinvaders-sidebar.png';


function pageLoadModule(){
    const content = document.getElementById('content');
    console.log('Loaded');
    const sidebarL = new Image();
    const sidebarR = new Image();
    sidebarL.src = SidebarImage;
    sidebarR.src = SidebarImage;
    sidebarL.classList.add('img-left');
    sidebarR.classList.add('img-right');
    content.appendChild(sidebarL);
    content.appendChild(sidebarR);
    return;
}
pageLoadModule();