# Simple Blog API

This is a RESTful API for a simple blog application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. Each blog post consists of a title, content, author, and creation date.

## Usage

1. **Clone the Application**
   - First, clone the application repository to your local machine.
   - Run 
    `bash 
    git clone https://github.com/ayowilfred95/blog-application
    `

2. **Install Dependencies**
   - Run `npm install` to install all the required dependencies.

3. **Start the Application**
   - Run `npm start` to start the application locally.

4. **Testing with Swagger**
   - Navigate to [http://localhost:4000/api-docs](http://localhost:4000/api-docs) to access the Swagger documentation.
   - The Swagger documentation provides a well-structured overview of the API endpoints.
   - Test each endpoint by clicking on "Try it out" and providing the required parameters.

5. **Using Postman**
   - If you prefer using Postman, you can access the following endpoints:
     - Create a new blog post: [http://localhost:4000/api/posts](http://localhost:4000/api/posts)
     - Get all blog posts: [http://localhost:4000/api/posts](http://localhost:4000/api/posts)
     - Get a single blog post by ID: [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)
     - Update a single blog post by ID: [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)
     - Delete a single blog post by ID: [http://localhost:4000/api/posts/:postId](http://localhost:4000/api/posts/:postId)

## Project Structure

- **Controllers**: Contains the blog controller where all the logic for creating, getting, updating, and deleting blog posts is implemented.
- **Routes**: Contains the routes for all the endpoint logic.
- **Swagger Configuration**: Contains the Swagger config file for testing purposes.
- **server.js**: Helps to bootstrap an Express framework that instantiates an HTTP connection.

## Notes

- The project structure is designed to keep the code modular for better organization and maintenance.
