# CS35L-Final-Project-Noted.

## Description
Noted is a vibrant online community where music enthusiasts unite to share their passion. Here, users can delve into album ratings and reviews, fostering connections with others through shared musical tastes.

## Key Features
1. User accounts have the ability to signup and login through email, and the information will be stored in a database and authentication system
2. Each user will have their own profile page where you can change your username, see top rated albums, and view followers/following list
3. Home page that dynamically displays the top rated albums
4. Search page that allows a user to search a database of music albums through Spotify's API
5. Search page that allows a user to search all the users saved in the database and view their profile page
6. Follow/Unfollow Accounts
7. Rate albums from 0-5 stars, and data will get stored under the logged in user
8. Navigation through the application

## Running the application
Clone the repository: 
git clone https://github.com/andyren12/cs35l
cd cs35l

### Run the frontend (React Native)
npm install
npm start

### Run the backend (Node JS and Firebase/Firestore)
cd server
npm install
npm start
