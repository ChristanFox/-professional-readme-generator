// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
        default: 'Professional README Generator'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short explaination for why you built this project and what it does.',
        default:'Spicy jalapeno bacon ipsum dolor amet burgdoggen pork chop picanha tri-tip landjaeger turducken turkey sausage brisket drumstick doner hamburger kielbasa beef ribs. Beef ribs ball tip chislic, frankfurter flank strip steak shank venison meatball pork loin capicola. Sirloin tenderloin t-bone swine venison chuck, alcatra beef ribs cupim doner short ribs kielbasa shank bacon. Turkey pastrami picanha ham hock ham shank. Ball tip andouille shankle, tenderloin frankfurter tri-tip hamburger pork tongue jerky short ribs pastrami biltong. Capicola chuck shank buffalo filet mignon.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the below licences is used for your project?',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2' ,'BSD3', 'none']
    },
    {
        type: 'input',
        name: 'require',
        message: 'Plese include any required dependecies for your project.',
        default: 'inquirer'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Plese include the technologies used within the project.',
        default: 'Node'
    },
    {
        type: 'input',
        name: 'creator',
        message: 'What is your Github username?',
        default: 'christanfox'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
        default: 'Christan Fox'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'christanfox@gmail.com'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who else contributed to this repo? (use their github account name)'
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run the tests?",
        default: "npm test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log('....Generating....');
        writeToFile('./dist/README.md', generateMarkdown({...inquirerAnswers}));
    })
}

// Function call to initialize app
init();
