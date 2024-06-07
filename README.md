# Simple Blog API

This is a RESTful API for a simple blog application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. Each blog post consists of a title, content, author, and creation date.

## Usage

### 1. Clone the Application
First, clone the application repository to your local machine by running:
```bash
git clone https://github.com/ayowilfred95/blog-application
```

### 2. Install Dependencies
Navigate to the project directory and install all required dependencies by running:
```bash
npm install
```

### 3. Start the Application
Start the application locally by running:
```bash
npm start
```

### 4. Testing with Swagger
Access the Swagger documentation by navigating to [http://localhost:4000/api-docs](http://localhost:4000/api-docs). The Swagger documentation provides a well-structured overview of the API endpoints. You can test each endpoint directly from the interface:
- To create a new blog post, expand the "POST" section, click "Try it out", and then click "Execute".
- For endpoints that require an `id`, copy an id from the `get all blog post` data, click "Try it out", insert it into the `id` field, and click "Execute".

### 5. Using Postman
If you prefer using Postman, you can access the following endpoints:
- **Create a new blog post**: `POST` [http://localhost:4000/api/posts](http://localhost:4000/api/posts)
  ```json
  {
    "title": "Sample Blog Post",
    "content": "This is the content of the blog post.",
    "author": "John Doe"
  }
  ```
- **Get all blog posts**: `GET` [http://localhost:4000/api/posts](http://localhost:4000/api/posts)
- **Get a single blog post by ID**: `GET` [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)
- **Update a single blog post by ID**: `PUT` [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)
  ```json
  {
    "title": "Updated Blog Post Title",
    "content": "This is the updated content of the blog post."
  }
  ```
- **Delete a single blog post by ID**: `DELETE` [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)

## Project Structure

- **Controllers**: Contains the blog controller where all the logic for creating, getting, updating, and deleting blog posts is implemented.
- **Routes**: Contains the routes for all the endpoint logic.
- **Swagger Configuration**: Contains the Swagger config file for testing purposes.
- **server.js**: Bootstraps an Express framework instance that sets up the HTTP connection.

## Notes

- The project structure is designed to keep the code modular for better organization and maintenance.
