// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs');
const util = require ('util');
const markDown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your name? ',
        name: 'author'
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project title? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'list',
        message: 'What kind of license shoul your project have?',
        choices: ['ISC', 'MIT', 'Apache', 'Mozilla'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command sholud be run to run tests? ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo? ',
        name: 'usage'
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = markDown(answers);
       
        fs.writeFile('ReadMe.md', mark, function(err){
            if(err){
                console.log('Something wrong', err)
            } else {
                console.log("Generating README...")
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
