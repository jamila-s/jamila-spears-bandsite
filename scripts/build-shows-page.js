
const showsList = document.querySelector('.shows');

const showsListContainer = document.createElement('div');
showsListContainer.classList.add('shows__container');

const showsTitle = document.createElement('p');
showsTitle.classList.add('shows__title');
showsTitle.innerText='Shows';

showsList.appendChild(showsTitle);

const sub_date = document.createElement('p');
    sub_date.classList.add('shows__sub-date');
    sub_date.innerText='Date';

const sub_venue = document.createElement('p');
    sub_venue.classList.add('shows__sub-venue');
    sub_venue.innerText='Venue';

const sub_location = document.createElement('p');
    sub_location.classList.add('shows__sub-location');
    sub_location.innerText='Location';





showsList.appendChild(sub_date);
showsList.appendChild(sub_location);
showsList.appendChild(sub_venue);


const showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=fa5afeea-d74a-4045-9408-860afa912b92'
let showsData = [];

axios
    .get(showsURL)
    .then((response) => {
        showsData = response.data;
        displayShows(showsData)
    })
    .catch((error) => {
        console.log(error)
    })

    function displayShows(showsData) {

for (let i = 0; i < showsData.length; i++) {
    const showsInfo = showsData[i]


    // Create elements and assign classes to each

    // Shows list container / 'ul' element
    const showsListInfo = document.createElement('ul');
    showsListInfo.classList.add('shows__info');

    // Shows list subtitle - date 
    const showsSubtitle_date = document.createElement('li');
    showsSubtitle_date.classList.add('shows__info-subtitle');
    showsSubtitle_date.innerText = 'DATE';

    // Shows list dates
    const showsListDate = document.createElement('li');
    showsListDate.classList.add('shows__info-date');
    showsListDate.innerText = new Date(showsInfo.date).toLocaleDateString();

    // Shows list subtitle - venue
    const showsSubtitle_venue = document.createElement('li');
    showsSubtitle_venue.classList.add('shows__info-subtitle')

    // Shows list venues
    const showsListVenue = document.createElement('li');
    showsListVenue.classList.add('shows__info-venue');
    showsSubtitle_venue.innerText = 'VENUE';

    // Shows list subtitle - location
    const showsSubtitle_location = document.createElement('li');
    showsSubtitle_location.classList.add('shows__info-subtitle')

    // Shows list locations
    const showsListLocation = document.createElement('li');
    showsListLocation.classList.add('shows__info-city')
    showsSubtitle_location.innerText = 'LOCATION';

    // Shows list buttons
    const showsListButton = document.createElement('button')
    showsListButton.classList.add()
    showsListButton.innerText = "BUY TICKETS"

    // Adding text from array to elements
    
  
    
    showsListVenue.innerText = showsInfo.place;
    showsListLocation.innerText = showsInfo.location;
   

    // Appending list items to ul element
    showsListInfo.appendChild(showsSubtitle_date);
    showsListInfo.appendChild(showsListDate);
    showsListInfo.appendChild(showsSubtitle_venue);
    showsListInfo.appendChild(showsListVenue);
    showsListInfo.appendChild(showsSubtitle_location);
    showsListInfo.appendChild(showsListLocation);
    showsListInfo.appendChild(showsListButton);

    showsListContainer.appendChild(showsListInfo);

    // Append ul to section
    showsList.appendChild(showsListContainer);
 }
    }
console.log(showsData);
displayShows(showsData)