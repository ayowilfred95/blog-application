const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Simple Blog Application",
      version: "0.1.0",
      description: "RESTful API for a simple blog application with Nodejs, Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Ayomide Wilfred Adeyemi",
        url: "https://wilfred-portfolio.vercel.app",
        email: "ayowilfred1995@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./src/route/*.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

module.exports = swaggerSpecs;
