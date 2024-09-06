# Basic CRUD API

## Overview

This is a basic CRUD (Create, Read, Update, Delete) API built with Node.js and Express.js. The API allows you to manage resources with simple operations and is designed to be a starting point for more complex applications.

## Features

- **Create**: Add new resources to the database.
- **Read**: Retrieve and list resources from the database.
- **Update**: Modify existing resources.
- **Delete**: Remove resources from the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB (for database storage)

## Installation

1. **Clone the repository:**
   git clone https://github.com/ololadetemi/basic_CRUD_API.git

2. **Navigate to the project directory:**
   cd basic_CRUD_API

3. **Install dependencies:**
   npm install

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=your_preferred_port
   ```

5. **Start the server:**
   npm start
  

   The server will start and listen on the port specified in your `.env` file (default is 3000).

## API Endpoints

### Create a Resource

- **URL**: `/api/resources`
- **Method**: `POST`
- **Body**: 

  {
    "name": "Resource Name",
    "description": "Resource Description"
  }
  ```
- **Success Response**: 
  - **Code**: 201
  - **Content**: 
    
    {
      "id": "resource_id",
      "name": "Resource Name",
      "description": "Resource Description"
    }
    ```

### Retrieve All Resources

- **URL**: `/api/resources`
- **Method**: `GET`
- **Success Response**: 
  - **Code**: 200
  - **Content**: 
    ```json
    [
      {
        "id": "resource_id",
        "name": "Resource Name",
        "description": "Resource Description"
      }
    ]
    ```

### Retrieve a Single Resource

- **URL**: `/api/resources/:id`
- **Method**: `GET`
- **Success Response**: 
  - **Code**: 200
  - **Content**: 
    {
      "id": "resource_id",
      "name": "Resource Name",
      "description": "Resource Description"
    }
    ```

### Update a Resource

- **URL**: `/api/resources/:id`
- **Method**: `PUT`
- **Body**: 
  {
    "name": "Updated Resource Name",
    "description": "Updated Resource Description"
  }
  ```
- **Success Response**: 
  - **Code**: 200
  - **Content**: 
    {
      "id": "resource_id",
      "name": "Updated Resource Name",
      "description": "Updated Resource Description"
    }
    ```

### Delete a Resource

- **URL**: `/api/resources/:id`
- **Method**: `DELETE`
- **Success Response**: 
  - **Code**: 204
  - **Content**: `No Content`

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License