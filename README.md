# DevBids Contractor

![JavaScript](https://img.shields.io/badge/JAVASCRIPT-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E&style=plastic) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&style=plastic) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white&style=plastic) ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white&style=plastic) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Description

DevBids Contractor is a forum designed with both small businesses and freelancers in mind. It is meant to function as a website where anyone can post links to jobs and part-time work that others make make offers and negotiate on.



## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
This program requires Node.js and NPM. Once these are installed, please run:

```
npm i
```
To seed the database, you must run:
```
node server/seeds/seed.js
```
To open the server on the frontend in your browser, you must run:
```
npm run develop
```
## Usage
To you use this application after it has been successfully set up with seeded data, click the Login/SignUp button to register. Once you are logged in, you can post contracts/jobs that you are looking for Freelancers to apply to. These contracts contain a title, job description, expected price to be paid, and when the project will need to be completed by.

You can also make offers on existing contracts. You can showcase the skills that you have experience in, a counteroffer to the price by the original poster, and when you can expect to have the project compeleted by.

The author of the contract can select which offer he/she wants to accept. Once the offer is accepted, the two parties can begin to correspond with each other and plan out the logistics for how they will fulfill their obligations. We offer a contract that both parties will need to agree to.

There is also a contact us section that can be used if we need to function as a third party in disputes between parties.

## Main NavBar
![Alt text](./Navbar.png )
## Contracts Page
![Alt text](./Contracts.png )
## Response to Contract
![Alt text](./Response.png )

## Contributing

You are free to contribute to this project, per the MIT license.

## Tests

There are no tests for this project.

## Future Developments
* Dyamic search feature that can search for contracts by category.
* More options for freelancing work that extends beyond programming.
* Payment processing functionality
* Contract verbiage changes based on parameters of job.

## Deployed App

[Heroku Link](https://devbids-gp4.herokuapp.com/)

## Questions

If you have any questions, contact us at j.franks725@gmail.com, taylor.marymargaret@gmail.com, huntersteffner@gmail.com, and vyang14.dev@gmail.com. Visit the GitHub page for the project by clicking the following link [GitHub Page](https://github.com/vyang14/devbids-contractor-Gp4).

## License

This projected is licensed under MIT.

https://opensource.org/licenses/MIT
