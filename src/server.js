const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpecs = require("./swagger-configuration/swagger");
const blogRoute = require("./route/blog.route")

// instantiate the express
const app = express();

// set a port for the application to listen on
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

// route middleware
app.use("/api",blogRoute)

app.listen(port, () => {
  console.log(`application is on http://localhost:${port}`);
});
