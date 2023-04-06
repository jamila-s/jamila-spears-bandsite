const showsListArray = [
    {
       subtitle_date: 'Date',
       date:  'Mon Sept 06 2021',
       subtitle_venue: 'Venue',
       venue: 'Ronald Lane',
       subtitle_location: 'Location',
       location: 'San Francisco, CA',
    },

    {
        subtitle_date: 'Date',
        date:  'Tue Sept 21 2021',
        subtitle_venue: 'Venue',
        venue: 'Pier 3 East',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
    },

    {
        subtitle_date: 'Date',
        date:  'Fri Oct 15 2021',
        subtitle_venue: 'Venue',
        venue: 'View Lounge',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
    },

    {
        subtitle_date: 'Date',
        date:  'Sat Nov 06 2021',
        subtitle_venue: 'Venue',
        venue: 'Hyatt Agency ',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
    },

    {
        subtitle_date: 'Date',
        date:  'Fri Nov 26 2021',
        subtitle_venue: 'Venue',
        venue: 'Moscow Center',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
    },

    {
        subtitle_date: 'Date',
        date:  'Wed Dec 15 2021',
        subtitle_venue: 'Venue',
        venue: 'Press Club ',
        subtitle_location: 'Location',
        location: 'San Francisco, CA',
    },
];

const showsList = document.querySelector('.shows');


for (let i = 0; i < showsListArray.length; i++) {


    // const showsListTitle = document.createElement('h3');
    const showsListInfo = document.createElement('ul');
    showsListInfo.getAttribute('class', 'shows__info');

    const showsSubtitle_date = document.createElement('li');

    const showsListDate = document.createElement('li');
    const showsSubtitle_venue = document.createElement('li');
    const showsListVenue = document.createElement('li');
    const showsSubtitle_location = document.createElement('li');
    const showsListLocation = document.createElement('li');

    showsSubtitle_date.innerText = showsListArray[i].subtitle_date;
    showsSubtitle_venue.innerText = showsListArray[i].subtitle_venue;
    showsSubtitle_location.innerText = showsListArray[i].subtitle_location;
    showsListDate.innerText = showsListArray[i].date;
    showsListVenue.innerText = showsListArray[i].venue;
    showsListLocation.innerText = showsListArray[i].location;


    showsListInfo.appendChild(showsSubtitle_date);
    showsListInfo.appendChild(showsListDate);
    showsListInfo.appendChild(showsSubtitle_venue);
    showsListInfo.appendChild(showsListVenue);
    showsListInfo.appendChild(showsSubtitle_location);
    showsListInfo.appendChild(showsListLocation);

    showsList.appendChild(showsListInfo);
 }

console.log(showsList);