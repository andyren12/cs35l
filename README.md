# CS35L-Final-Project-Noted.

## Description
Noted is a vibrant online community where music enthusiasts unite to share their passion. Here, users can delve into album ratings and reviews, fostering connections with others through shared musical tastes.

## Key Features
1. Users have the ability to signup and login through email, and the information will be stored in a database and authentication system
2. Each user will have their own profile page, see top rated albums, and view followers/following list
3. Home page that dynamically displays newly released albums as well as personalized recommendations
4. Search page that allows a user to search a database of music albums through Spotify's API
5. Search page that allows a user to search all the users saved in the database and view their profile page
6. Album details page that displays album analytics including current user rating and app average rating
7. Follow/Unfollow Accounts
8. Rate albums from 1-5 stars, and data will get stored under the logged in user
9. Navigation through the application

## Running the application
Clone the repository: 
git clone https://github.com/andyren12/cs35l
cd cs35l

### Create .env file in the server folder; file should contain the following information: 
CLIENT_ID=1f693653539b4822b239283cd159a81c
CLIENT_SECRET=ded74672d50a4b75b9cd498e2ae6017c

### Run the frontend (React Native)
npm install
npm start

### Run the backend (Node JS and Firebase/Firestore)
cd server
npm install
npm start
