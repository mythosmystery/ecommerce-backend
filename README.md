 
#  eCommerce Project

### Project Created By: Hunter Barton
## **Description**
An API for accessing a basic ecommerce app over the internet. It has GET, PUT, POST, and DELETE routes for products, tags, and categories.  
  
***
## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [License](#license) 
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***
  
## Installation 
Create a new *.env*  file containing  
`DB_NAME=ecommerce_db`  
`DB_USER={your_username}`  
`DB_PW={your_password}`  
Start the MySQL server and run the *schema.sql* file to setup the database. Then run `npm i` to install Node packages. Run `npm run seed` to seed the database.
  
## Usage
To start the server, run `npm start`. From there you can access the server at `localhost:3001/api` There are GET, POST, PUT, and DELETE routes for products, tags, and categories. For example, to get all products and their included data, run a GET request to `localhost:3001/api/products` it will be returned in JSON format.
  
## Configuring
Create a *.env* file containing the information needed to access your SQL server
  
## Contributing

If you would like to add to this project, you can [follow me on GitHub](https://github.com/mythosmystery).  
  
## Tests
Just test all the routes
  
## Questions:
If you have any questions about this project, you can reach me [on GitHub](https://github.com/mythosmystery)
or via email at axiysfire@gmail.com.
  
## License
MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
**eCommerce Project created 05-17-2021, by Hunter Barton.** 
  