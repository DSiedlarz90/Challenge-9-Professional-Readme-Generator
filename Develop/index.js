// Questions required. Title, Description, Table of contents, Installation, Usage, License, Contributing, Tests, Questions, Github username, Github profile, Email address, Screenshots

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title.  (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter your application description!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Please check additional sections you would like to include in your README.',
        choices: [
            {
                name: 'Coding used',
                checked: true
            },
            {
                name: 'License',
                checked: true
            },
            {
                name: 'Contributing',
                checked: true
            },
            {
                name: 'Tests',
                checked: true
            },
            {
                name: 'Questions',
                checked: true
            },
            {
                name: 'Credits',
                checked: true
            },
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list any required packages for installation of your application.',
        when: ({ contents }) => {
            if (contents.indexOf('Installation') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions to use your application. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions to use your application!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information.',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        default: 0,
        when: ({ contents }) => {
            if (contents.indexOf('License') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please provide license information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing.',
        when: ({ contents }) => {
            if (contents.indexOf('Contributing') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter guidelines for contributing!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test information for your application.',
        when: ({ contents }) => {
            if (contents.indexOf('Tests') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('What packages are required to run tests for your application?');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email address for others to reach you with questions.',
        when: ({ contents }) => {
            if (contents.indexOf('Questions') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please provide an email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter your GitHub profile name. (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter your Github profile name!')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
            }
        }
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
