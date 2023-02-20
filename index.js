const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the name of your project?',
          name: 'projecttitle',
        },
        {
          type: 'input',
          message: 'Can you describe your project?',
          name: 'description',
        },
        {
          type: 'input',
          message: 'How to install your project?',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'How does one use your application?',
          name: 'usage',
        },
        {
            type: 'list',
            message: 'What license would you like to use?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Any contributions you would like to mention?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are the test for your application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'git',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        
      ])
      .then((response) =>
        {
            
fs.appendFile("readmes/README.md",`# ${response.projecttitle}
<img src="https://img.shields.io/badge/license-${response.license}-blue">
## Description
${response.description}            
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to contribute](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation {#installation}
${response.installation}
## Usage {#usage}
${response.usage}
## How to Contribute {#credits}
${response.contributing} 
## Tests {#tests}
${response.tests} 
## Questions {#questions}
Please check my github projects  https://github.com/${response.git} 
and if you have any questions about this project please email me at: ${response.email} `
            , (err)=>
            err ? console.error(err) : console.log('ReadMe generated!')
            )
    
    }
      );

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
