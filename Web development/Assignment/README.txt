Hello!

To run these files, please do the following:

1- Clone the repository to your machine via git clone and then the url of the repository
2- navigate to the project directory "assignment" using cd assignment
3- Install Docker 
4- Configure your MongoDB using the URI/connection string mongodb+srv://niwatorim001:testing123@users.eihuf.mongodb.net/Users?retryWrites=true&w=majority&appName=Users
4- Build Docker image using command: docker build -t assignment .
5- Run the image using the command: docker run -p 5000:5000 flask-api

  -> The API will be available at `http://localhost:5000`.

Testing the API:
- You can test the following API endpoints:
- `POST /add`: Add a new user.
- `GET /users`: Get all users.
- `GET /user/{id}`: Get a specific user by ID.
- `PUT /update/{id}`: Update user details.
- `DELETE /delete/{id}`: Delete a user by ID.

All users ID's are made interesting through hashing

Personal note: This was my first time using Docker so I was forced to use AI and youtube to learn the such, and it may or may not work (worked when I tested it). However the API works completely fine. Thank you for taking your time to look at this, I hope I can be of use