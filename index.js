// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?',
    },
    {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
    },
    {
    type: 'input',
    name: 'Project Title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'Description',
    message: 'Input your project description?',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install? ',
    default: 'To install dependencies run the following command: npm i',
    },
    {
    type: 'input',
    name: 'Test',
    message: 'What are the steps required to test?',
    default: 'To run tests run the following command: npm test',
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'What is the usage of your project?',
    },
    {
    type: 'input',
    name: 'Contribution',
    message: 'Who are the contributors?',
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => { 
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}
// Function call to initialize app
init();
