Live Link
https://tourhistory.netlify.app/

Home Page
![Screenshot (8)](https://github.com/abhishek-kumar-91/tour_history/assets/111195553/3aad45f2-c650-4da1-a2ac-fbae1911adfb)
Add tour
![Screenshot (9)](https://github.com/abhishek-kumar-91/tour_history/assets/111195553/82f1afdc-3284-4c55-8d8b-896b206c6689)
Description of blog
![Screenshot (12)](https://github.com/abhishek-kumar-91/tour_history/assets/111195553/6d244b43-1f3c-4949-a115-e0278dd6dc5d)
Login
![Screenshot (10)](https://github.com/abhishek-kumar-91/tour_history/assets/111195553/50903efc-156c-4faf-aee7-074d92b3585a)
Register
![Screenshot (11)](https://github.com/abhishek-kumar-91/tour_history/assets/111195553/4f447c4d-1610-4646-80c4-72926f06eacb)


Getting Started
Prerequisites
Install Node.js: Node.js Installation Guide
Install MongoDB: MongoDB Installation Guide
Install Git: Git Installation Guide

Clone the Repository
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install server-side dependencies
cd server
npm install

# Install client-side dependencies
cd ../client
npm install


MONGO_URI=<your-connection-string>

Setting up MongoDB
Create a MongoDB database and obtain the connection string. Replace <your-connection-string> in the server .env file with your actual MongoDB connection string.

Running the Application
Start the Server
npm run dev

start the client
npm run dev

Additional Notes
Environment Variables: You may need to set up environment variables for sensitive information like API keys, database connection strings, etc. Add them to the respective .env files (both in the server and client directories) and make sure to add these files to your .gitignore.
