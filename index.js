// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Need to name the file "README.md" per usual naming convention:
const fileName = `README.md`;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project, including the what, why, and how of your project, i.e., motivation, why you built it, what problems it solves, what did you learn, and why it is important',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What needs to be done to install and run your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide details to use your application',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list your collaborators & links to their GitHub profiles',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using for your application?',
        choices: ['MIT', 'Apache', 'The Unliccense', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'Give an example command to test your application',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for questions from users?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();