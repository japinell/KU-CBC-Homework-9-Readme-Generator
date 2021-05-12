// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "\n\n---------- BASIC REQUIREMENTS ----------\n\nEnter the project title:",
    validate: (answer) => {
      return validateInput(answer);
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
    validate: (answer) => {
      return validateInput(answer);
    },
  },
  {
    type: "list",
    name: "tableOfContent",
    message: "Do you want to include a table of content?",
    choices: ["Y", "N"],
    default: "Y",
  },
];

// Validate that the input is 2 or more words and at least 1 character each word
function validateInput(input) {
  let message =
    "Please enter two or more words with at least one letter or digit";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z0-9]{1,}[\s]{1,}[a-zA-Z0-9]{1,}$/g)
      ? true
      : message;
  } else return message;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
  });
}

// Function call to initialize app
init();
