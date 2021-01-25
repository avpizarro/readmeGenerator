// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a brief project description',
    },
    { 
        type:'checkbox',
        message: 'What sections would your README have?',
        name: 'contents',
        choices: ['installation','usage','license','contributing','tests','questions'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your app',
    },
    {
        type:'checkbox',
        message: 'Add licenses details',
        name: 'license',
        choices: ['Apache','BSD','MIT','LGPL','GNU','GPL'],

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run the tests for your app',
    },
    {
        type: 'input',
        name: 'questionsGitHub',
        message: 'Add your gitHub profile link',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email address?',
    },

])
.then((data) => {
    // TODO: Create a function to write README file
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
