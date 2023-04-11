const showsListArray = [
   
    {
       subtitle_date: 'Date',
       date:  'Mon Sept 06 2021',
       subtitle_venue: 'Venue',
       venue: 'Ronald Lane',
       subtitle_location: 'Location',
       location: 'San Francisco, CA',
       button: 'Buy Tickets',
    },

    {
        subtitle_date: 'Date',
        date:  'Tue Sept 21 2021',
        subtitle_venue: 'Venue',
        venue: 'Pier 3 East',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },

    {
        subtitle_date: 'Date',
        date:  'Fri Oct 15 2021',
        subtitle_venue: 'Venue',
        venue: 'View Lounge',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },

    {
        subtitle_date: 'Date',
        date:  'Sat Nov 06 2021',
        subtitle_venue: 'Venue',
        venue: 'Hyatt Agency ',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },

    {
        subtitle_date: 'Date',
        date:  'Fri Nov 26 2021',
        subtitle_venue: 'Venue',
        venue: 'Moscow Center',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },

    {
        subtitle_date: 'Date',
        date:  'Wed Dec 15 2021',
        subtitle_venue: 'Venue',
        venue: 'Press Club ',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
];

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

for (let i = 0; i < showsListArray.length; i++) {


    // Create elements and assign classes to each

    // Shows list container / 'ul' element
    const showsListInfo = document.createElement('ul');
    showsListInfo.classList.add('shows__info');

    // Shows list subtitle - date 
    const showsSubtitle_date = document.createElement('li');
    showsSubtitle_date.classList.add('shows__info-subtitle')

    // Shows list dates
    const showsListDate = document.createElement('li');
    showsListDate.classList.add('shows__info-date')

    // Shows list subtitle - venue
    const showsSubtitle_venue = document.createElement('li');
    showsSubtitle_venue.classList.add('shows__info-subtitle')

    // Shows list venues
    const showsListVenue = document.createElement('li');
    showsListVenue.classList.add('shows__info-venue')

    // Shows list subtitle - location
    const showsSubtitle_location = document.createElement('li');
    showsSubtitle_location.classList.add('shows__info-subtitle')

    // Shows list locations
    const showsListLocation = document.createElement('li');
    showsListLocation.classList.add('shows__info-city')

    // Shows list buttons
    const showsListButton = document.createElement('button')
    showsListButton.classList.add()

    // Adding text from array to elements
    showsSubtitle_date.innerText = showsListArray[i].subtitle_date;
    showsSubtitle_venue.innerText = showsListArray[i].subtitle_venue;
    showsSubtitle_location.innerText = showsListArray[i].subtitle_location;
    showsListDate.innerText = showsListArray[i].date;
    showsListVenue.innerText = showsListArray[i].venue;
    showsListLocation.innerText = showsListArray[i].location;
    showsListButton.innerText = showsListArray[i].button;

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

console.log(showsList);