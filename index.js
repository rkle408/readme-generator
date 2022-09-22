// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Need to name the file "README.md" per usual naming convention:
const fileName = `README.md`;

// Will make README in a separate file to follow concept of modularization
const generateReadme = require('./generateReadme')

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
        message: 'Please provide a short description of your project, including the what, why, and how of your project, i.e., motivation, why you built it, what problems it solves, what did you learn, and why it is important:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command needs to be done to INSTALL and run your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide command/details to use/run your application:',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list your collaborators & links to their GitHub profiles:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any other credits and their links:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using for your application?',
        choices: ['MIT', 'Apache', 'The Unlicense', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'Give an example command to test your application:',
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
function writeToFile(fileName, data) {
    // We need to be able to generate a README.md file with the information the user provided us:
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    // Use npm to display above questions to user
    inquirer
        .prompt(questions)
        .then((responses) => {
            // console.log(responses)
            // Once we have the users answers, then we tell them that we have their answers using this console.log
            console.log("Please wait while we generate your custom README...");
            // Utilize funtion to make the actual README file using the user responses
            writeToFile(fileName, generateReadme({...responses}))
        });
}

// Function call to initialize app
init();