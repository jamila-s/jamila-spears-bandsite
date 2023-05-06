
const commentSection = document.querySelector('.comments__section');

// API URl + Comments + API Key 
const commentsURL = 'https://project-1-api.herokuapp.com/comments?api_key=fa5afeea-d74a-4045-9408-860afa912b92'

// Initialize userData with open array to use globally 
let userData = []

// Function to get comments from API and sort in date order from most recent 
function getComments () {
axios
   .get(commentsURL)
   .then((response) => {
      userData = response.data;
      userData.sort( (a,b) => {
         return b.timestamp - a.timestamp
      }) 
      displayComment(userData);
   })
   .catch((error) => {
      console.log(error)
   })
}

// Function to create elements, add data from API and display comments on bio page 
function displayComment(userData) {
    commentSection.innerText = '';

    for (let i = 0; i < userData.length; i++) {
      const userInfo = userData[i]

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');

    const dot = document.createElement('span');
    dot.classList.add('dot');

    commentContainer.appendChild(dot);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('comment__container-info');

    const miniContainer = document.createElement('div');
    miniContainer.classList.add('comment__container-mini');

    const commentName = document.createElement('p');
    commentName.classList.add('comment__name');

    const commentDate = document.createElement('p');
    commentDate.classList.add('comment__date');

    const commentText = document.createElement('p');
    commentText.classList.add('comment__text');


    commentName.innerText = userInfo.name;
    commentDate.innerText = new Date (userInfo.timestamp).toLocaleDateString()
    commentText.innerText = userInfo.comment;
    

    commentContainer.appendChild(infoContainer);
    infoContainer.appendChild(miniContainer);
    miniContainer.appendChild(commentName);
    miniContainer.appendChild(commentDate);
    infoContainer.appendChild(commentText);

    commentSection.appendChild(commentContainer);
   }
}


// Grabbing comments from form and posting them on site
const form = document.querySelector('.form__container-input');


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userNameInput = document.getElementById('userName');
  const userCommentInput = document.getElementById('userComment');
  
  axios.post(commentsURL, {
   name: userNameInput.value,
   comment: userCommentInput.value
  })
  .then((response) => {
      console.log (response)
      getComments()
    })
  

  userCommentInput.value = '';
  userNameInput.value = '';
 
});

getComments ();