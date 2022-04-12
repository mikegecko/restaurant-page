const homeModule = () => {
    const homeContainer = document.createElement('div');
    const homeContent = document.createElement('div');
    const homeHours = document.createElement('div');
    const homeLocation = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContent.classList.add('home-content');
    homeHours.classList.add('home-hours');
    homeLocation.classList.add('home-location');
    homeContent.innerText = "8-Bit Bar is a must see for anyone in the area. We have all the best retro arcade games for you to enjoy with friends and our themed drinks & menu are sure to satisfy you!";
    homeContainer.appendChild(homeContent);
    const hourHeader = document.createElement('h1');
    hourHeader.textContent = "Hours";
    homeHours.appendChild(hourHeader);
    //Weekday hours - maybe there's a better way to do this?
    const sunday = document.createElement('p');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    sunday.textContent = "Sunday: 8am - 2am";
    monday.textContent = "Monday: 10am - 1am";
    tuesday.textContent = "Tuesday: 10am - 1am";
    wednesday.textContent = "Wednesday: 10am - 1am";
    thursday.textContent = "Thrusday: 10am - 1am";
    friday.textContent = "Friday: 8am - 2am";
    saturday.textContent = "Saturday: 8am - 2am";
    homeHours.appendChild(sunday);
    homeHours.appendChild(monday);
    homeHours.appendChild(tuesday);
    homeHours.appendChild(wednesday);
    homeHours.appendChild(thursday);
    homeHours.appendChild(friday);
    homeHours.appendChild(saturday);
    homeContainer.appendChild(homeHours);
    //Location
    const locationHeader = document.createElement('h1');
    const locationContent = document.createElement('p');
    locationHeader.textContent = "Location";
    locationContent.textContent = "123 Nowhere Drive, Emptyville, New York";
    homeLocation.append(locationHeader);
    homeLocation.appendChild(locationContent);
    homeContainer.appendChild(homeLocation);
    return homeContainer;
}
export {
    homeModule
};