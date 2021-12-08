// Questions required. Title, Description, Table of contents, Installation, Usage, License, Contributing, Tests, Questions, Github username, Github profile, Email address, Screenshots

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        // Checklist for options to add to readme
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Please check all sections you would like to include in your README.',
        choices: [
            {
                name: 'Title',
                checked: false
            },
            {
                name: 'Description',
                checked: false
            },
            {
                name: 'Application Installation',
                checked: false
            },
            {
                name: 'How to Use',
                checked: false
            },
            {
                name: 'License',
                checked: false
            },
            {
                name: 'Interested in Contributing?',
                checked: false
            },
            {
                name: 'Tests',
                checked: false
            },
            {
                name: 'Github',
                checked: false
            },
            {
                name: 'Email Address',
                checked: false
            },
            {
                name: 'Screenshots',
                checked: false
            },
            {
                name: 'Built',
                checked: false
            },
            {
                name: 'Deployed',
                checked: false
            }
        ]
    },
    // Project title question with error control
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title.  (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Title') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    // Project description question with error control
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Description') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter your application description!');
                return false;
            }
        }
    },
    // Installation question with error control
    {
        type: 'input',
        name: 'installation',
        message: 'Please list any required packages for installation of your application. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Application Installation') > -1) {
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
    // Instructions question with error control
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions to use your application. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('How to Use') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions to use your application!');
                return false;
            }
        }
    },
    // License question with error control
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information. (Required)',
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
    // Contributing question with error control
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Interested in Contributing?') > -1) {
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
    // Tests question with error control
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test information for your application. (Required)',
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
    // Github username question with error control
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Github') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Github profile question with error control
    {
        type: 'input',
        name: 'profile',
        message: 'Please enter The link to your Github profile. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Github') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: profileInput => {
            if (profileInput) {
                return true;
            } else {
                console.log('Please enter your Github profile name!')
            }
        }
    },
    // Email question with error control
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email address for others to reach you with questions. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Email Address') > -1) {
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
    // Coding used question with error control
    {
        type: 'checkbox',
        name: 'built',
        message: 'Please select the technologies that your application was built with. (Required)',
        choices: [' HTML', ' CSS', ' SASS', ' JavaScript', ' Node.js', ' Express.js'],
        default: 0,
        when: ({ contents }) => {
            if (contents.indexOf('Built') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: builtInput => {
            if (builtInput) {
                return true;
            } else {
                console.log('Please provide a link for your screenshot!')
                return false;
            }
        }
    },
    // Screenshot link question with error control
    {
        type: 'input',
        name: 'screenshotLink',
        message: 'Please provide a link for your screenshot. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Screenshots') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: screenshotLinkInput => {
            if (screenshotLinkInput) {
                return true;
            } else {
                console.log('Please provide a link for your screenshot!')
                return false;
            }
        }
    },
    // Screenshot alt description question with error control
    {
        type: 'input',
        name: 'screenshotAlt',
        message: 'Please provide alt text for your screenshot. (Required)',
        when: ({ contents }) => {
            if (contents.indexOf('Screenshots') > -1) {
                return true;
            } else {
                return false;
            }
        },    
        validate: screenshotAltInput => {
            if (screenshotAltInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Deployed application question with error control
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to your deployed application.',
        when: ({ contents }) => {
            if (contents.indexOf('Deployed') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a link!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README Complete!')
    });
};

// TODO: Create a function to initialize app
function init(questions) {
    return inquirer.prompt(questions);   
};

// Function call to initialize app
init(questions)
    .then(data => generateMarkdown(data))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });
