# Tech Blog - MVC Demonstration

## Description

'Placeholder until application fully completed.'

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Deployed Application](#deployed-application)
  * [Questions](#questions)
  
## License

This application has the following licence:

MIT License

[Link to licence](https://opensource.org/licenses/MIT)

## Installation
    
  Follow the following steps to properly install this application:

  First, clone the repository.


  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

MySQL must be downloaded and installed also.
You can download the installer directly from the [MySQL website](https://dev.mysql.com/downloads/installer). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install mysql
```
Proficiency with the MySQL command line prompt is encouraged, but GUI's such as MySQL Workbench can also be used to provide access to the database (I personally used TablePlus during the creation of my application). 

This command line application makes use of several dependencies:

•bcrypt
•bootstrap
•connect-session-sequelize
•dotenv
•express
•express-handlebars
•express-session
•mysql2
•sequelize

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```

We will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly.

You will need to create a `.env` file in your root directory. This will store your configuration details for accessing MySQL such as database name and login information. Example as follows:

```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PASSWORD='YOUR PASSWORD'
```

Prior to starting the server, we need to create our database and its seeded data with the following commands:

Run `mysql -u root -p` from the command linr and enter your MySQL password when prompted if you have one to access MySQL. 
Create the E-Commerce database with command `source db/schema.sql`. 
You can log out ofthe MySQL shell with `\q`.
Seed database with `npm run seed` as notated in the "scripts" section of the `package.json` file.


  * And finally: 

  Please type the following command within the terminal to invoke the application:

```bash
npm start
```
You can then access the API routes using the likes of Insomnia application or alternatively, the Thunder Client extension from within VS Code if you prefer. The video walkthrough below details the endpoints used for our CRUD operations along with the JSON body formats for each of the database models used. 

## Screenshots

'Placeholder until application fully completed.'

## Deployed Application

'Placeholder until application fully completed.'
      
## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)