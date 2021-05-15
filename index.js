// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "continue",
    message:
      "\n\n---------- README GENERATOR ----------\n\nThe following questions will be used to generate the blueprint for a professional Readme File.\nPress enter to continue...",
  },
  {
    type: "input",
    name: "title",
    message:
      "\n\n---------- BASIC REQUIREMENTS ----------\n\nEnter the project title:",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
    validate: (answer) => {
      return validateAlphaInput(answer);
    },
  },
  {
    type: "confirm",
    name: "tableOfContent",
    message: "Do you want to include a table of content?",
  },
  {
    type: "confirm",
    name: "license",
    message:
      "\n\n---------- OPTIONAL REQUIREMENTS ----------\n\nDo you want to include a badge for the type of license?",
  },
  {
    type: "confirm",
    name: "features",
    message: "Do you want to include a section for features?",
  },
  {
    type: "confirm",
    name: "contribute",
    message: "Do you want to include a section for contributions?",
  },
  {
    type: "confirm",
    name: "tests",
    message: "Do you want to include a section for tests?",
  },
];

// Validate that the input is alpha-numeric with a lenght of 2 or more words, and at least 1 character each word
function validateAlphaNumericInput(input) {
  let message =
    "Please enter two or more words with at least one letter or digit";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z0-9]{1,}[\s]{1,}[a-zA-Z0-9]{1,}$/g)
      ? true
      : message;
  } else return message;
}

// Validate that the input is alphabetical with a lenght of 2 or more words, and at least 1 character each word
function validateAlphaInput(input) {
  let message = "Please enter two or more words with letters only";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z]{1,}[\s]{1,}[a-zA-Z]{1,}$/g) ? true : message;
  } else return message;
}

// Validate that the input is numeric with a lenght of 2 or more words, and at least 1 character each word
function validateNumericInput(input) {
  let message = "Please enter two or more words with digits only";
  if (input.length > 0) {
    return input.match(/^[0-9]{1,}[\s]{1,}[0-9]{1,}$/g) ? true : message;
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
