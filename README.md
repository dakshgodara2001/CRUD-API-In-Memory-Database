#  CRUD API with In-Memory Database

This project demonstrates a simple CRUD API using an in-memory database built with Node.js and Express. The API allows you to create, read, update, and delete users in the in-memory database.


## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the required dependencies.
3. Create a new file called `.env` and set the `PORT` variable to the desired port number.

## Running the application

- To run the application in development mode, use the following command: `npm run start:dev`.
- To run the application in production mode, use the following command: `npm run start:prod`.

## API Endpoints

### Get All Users

- Method: `GET`
- Endpoint: `/api/users`
- Description: Retrieves all users from the in-memory database.

### Get User by ID

- Method: `GET`
- Endpoint: `/api/users/:userId`
- Description: Retrieves a user by their unique ID.

### Create User

- Method: `POST`
- Endpoint: `/api/users`
- Description: Creates a new user.
- Body parameters:
  - `username`: string (required)
  - `age`: number (required)
  - `hobbies`: array of strings or empty array (required)

### Update User

- Method: `PUT`
- Endpoint: `/api/users/:userId`
- Description: Updates an existing user by their unique ID.
- Body parameters: Any combination of `username`, `age`, and `hobbies`.

### Delete User

- Method: `DELETE`
- Endpoint: `/api/users/:userId`
- Description: Deletes an existing user by their unique ID.

## Testing

You can test the API using a tool like [Postman](https://www.postman.com/downloads/).


