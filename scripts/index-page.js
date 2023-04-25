const commentInfo= [
     {
        name: 'Connor Walton',
        time: '02/17/2021',
        text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
     },

     {
        name: 'Emilie Beach',
        time: '01/09/2021',
        text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
     },

     {
        name: 'Miles Acosta',
        time: '12/20/2020',
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
     },
]


function displayComment(comment) {

    const commentSection = document.querySelector('.comments__section');

    for (let i = 0; i < commentInfo.length; i++) {

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


    commentName.innerText = commentInfo[i].name;
    commentText.innerText = commentInfo[i].text;
  
   
    commentContainer.appendChild(infoContainer);
    infoContainer.appendChild(miniContainer);
    miniContainer.appendChild(commentName);
    miniContainer.appendChild(commentDate);
    infoContainer.appendChild(commentText);

    commentSection.appendChild(commentContainer);
   }
}


const form = document.querySelector('.form__container-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userNameInput = document.getElementById('userName');
  const userCommentInput = document.getElementById('userComment');

  const newCommentInfo = {name: userNameInput.value, text: userCommentInput.value}
  commentInfo.unshift(newCommentInfo);

  console.log(newCommentInfo)


  
displayComment()

  userCommentInput.value = '';
  userNameInput.value = '';
 
});
displayComment ()
