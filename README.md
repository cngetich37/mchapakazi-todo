# Mchapakazi Todo API Project

## Overview

This is a powerful and versatile Todo API project built with the cutting-edge technologies of Express.js and MongoDB. It incorporates JSON Web Tokens (JWT) for secure authentication and utilizes the bcrypt library for robust password hashing. Whether you're building a task management app or exploring the world of RESTful APIs, this project provides a solid foundation to get started.

![Todo API](https://your-image-url.com/todo-api-image.jpg)

## Features

- **User Authentication:** Secure user registration and login using JWT for authentication.
- **Create and Manage Todos:** Easily create, update, and delete your tasks.
- **Password Encryption:** Passwords are hashed using bcrypt for utmost security.
- **Robust Error Handling:** Comprehensive error handling for a smooth user experience.
- **RESTful API:** Follows RESTful principles for easy integration into various applications.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/cngetich37/mchapakazitodo-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mchapakazitodo-backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables:

   Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=5001
   CONNECTION_STRING=<enter the remote mongodb url> or <localhost>
   ACCESS_TOKEN_SECRET=your-secret-key
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. You're ready to use the Mchapakazi Todo API! Access it at `http://localhost:5001`.

## Usage

### Register a User

```http
POST /api/users/register
```

#### Request

```json
{
  "username":"your_username",
  "email":"your_email",
  "password":"your_password"
}
```

#### Response

```json
{
  "username": "your_username",
  "email": "your_email",
  "password": "your_hashed_password",
  "_id": "unique_id_for_each_user",
  "createdAt": "time_created",
  "updatedAt": "time_updated",
  "__v": 0
}
```

### Login

```http
POST /api/users/login
```

#### Request

```json
{
  "email": "your_username",
  "password": "your_password"
}
```

#### Response

```json
{
  "accessToken": "your_jwt_token"
}
```

### Create a Todo

```http
POST /api/todos/
```

#### Request

```json
{
  "name": "Your Todo Name",
  "date": "Your Todo Date",
  "day": "Your Todo Day",
  "time": "Your Todo Time"
}
```

#### Response

```json
{
  "name": "Hiking",
  "date": "12/09/2023",
  "day": "Wednesday",
  "time": "11:00am",
  "_id": "<todo_id>",
  "createdAt": "2023-09-20T20:48:50.196Z",
  "updatedAt": "2023-09-20T20:48:50.196Z",
  "__v": 0
}
```

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀

