/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/ohfr')
  .then(response => {
    container.appendChild(cardCreater(response.data));
  })
  .catch(error => {
    console.log(error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 
'dustinmyers', 
'justsml', 
'luishrd', 
'bigknell'];


followersArray.forEach(cur => {
  axios.get(`https://api.github.com/users/${cur}`)
  .then(res => {
    container.appendChild(cardCreater(res.data));
  })
  .catch(err => {
    console.log(err);
  })
});
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const container = document.querySelector('.cards');

const cardCreater = obj => {
  const main = document.createElement('div');
  main.classList.add('card');

  const image = document.createElement('img');
  image.src = obj.avatar_url;
  main.appendChild(image);

  const div = document.createElement('div');
  div.classList.add('card-info');
  main.appendChild(div);

  const title = document.createElement('h3');
  title.classList.add('name');
  title.textContent = obj.name;
  div.appendChild(title);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = obj.login;
  div.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  div.appendChild(location);

  const profile = document.createElement('p');
  profile.textContent = `Profile: `;
  div.appendChild(profile);

  const gitPage = document.createElement('a');
  gitPage.href = obj.url;
  gitPage.textContent = obj.url;
  profile.appendChild(gitPage);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;
  div.appendChild(followers);
  
  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;
  div.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;
  div.appendChild(bio);

  return main;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
