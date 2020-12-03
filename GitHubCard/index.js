/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



import axios from "axios"

const myData = axios.get("https://api.github.com/users/Mark-DeLong")
.then((myData) => {
  const allTheData = {
    avatar_url: myData.data.avatar_url,
    users_name: myData.data.name,
    users_user_name: myData.data.login,
    users_location: myData.data.location,
    users_page_address: myData.data.url,
    users_follower_count: myData.data.followers,
    users_following_count: myData.data.following,
    users_bio: myData.data.bio
  } 
})

const cards = document.querySelector(".cards")
cards.append(gitStuff)

const followersArray = [];

function gitStuff(allTheData) {
  const gitCard = document.createElement("div")
  gitCard.classList.add("card")
  gitCard.appendChild(userImg)
  gitCard.appendChild(info)

    const userImg = document.createElement("img")
    userImg.src = `${allTheData[0]}`
    const info = document.createElement("div")
    info.classList.add("card-info")
    info.appendChild(nameTitle)
    info.appendChild(userName)
    info.appendChild(location)
    info.appendChild(profile)
    info.appendChild(followers)
    info.appendChild(following)
    info.appendChild(bio)

      const nameTitle = document.createElement("h3")
      nameTitle.classList.add("name")
      nameTitle.textContent = `${allTheData[1]}`

      const userName = document.createElement("p")
      userName.classList.add("username")
      userName.textContent = `${allTheData[2]}`

      const location = document.createElement("p")
      location.textContent = `Location: ${allTheData[3]}`

      const profile = document.createElement("p")
      profile.textContent = `Profile: `
      profile.appendChild(pageAddress)

        const pageAddress = document.createElement("a")
        pageAddress.src = {users_page_address}
        pageAddress.textContent = `${allTheData[4]}`

      const followers = document.createElement("p")
      followers.textContent = `Followers: ${allTheData[5]}`

      const following = document.createElement("p")
      following.textContent = `Following: ${allTheData[6]}`

      const bio = document.createElement("p")
      bio.textContent = `Bio: ${allTheData[7]}`

  return gitCard
}