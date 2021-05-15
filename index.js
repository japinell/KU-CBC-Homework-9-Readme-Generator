// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "label",
    message:
      "\n\n---------- README GENERATOR ----------\n\nThe following questions will be used to generate the blueprint for a professional Readme File.\nPress enter to continue...",
  },
  {
    type: "input",
    name: "projectTitle",
    message:
      "\n\n---------- BASIC REQUIREMENTS ----------\n\nEnter the project title:",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter the project description:",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
  },
  {
    type: "confirm",
    name: "addContent",
    message: "Do you want to add content along with the project description?",
  },
  {
    type: "input",
    name: "projectMotivation",
    message:
      "\n\n---------- BASIC REQUIREMENTS > PROJECT DESCRIPTION -> ADDITIONAL QUESTIONS ----------\n\nWhat was your motivation for the project?",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
    when: function (answers) {
      return answers.addContent;
    },
  },
  {
    type: "input",
    name: "projectWhy",
    message: "Why did you build the project?",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
    when: function (answers) {
      return answers.addContent;
    },
  },
  {
    type: "input",
    name: "projectProblemAddressed",
    message: "What problem does the project solve?",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
    when: function (answers) {
      return answers.addContent;
    },
  },
  {
    type: "input",
    name: "projectLessons",
    message: "What did you learn while building the project?",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
    when: function (answers) {
      return answers.addContent;
    },
  },
  {
    type: "input",
    name: "projectDifferentiator",
    message: "What makes your project stand out?",
    validate: (answer) => {
      return validateAlphaNumericInput(answer);
    },
    when: function (answers) {
      return answers.addContent;
    },
  },
  {
    type: "confirm",
    name: "addTableOfContent",
    message:
      "\n\n---------- OPTIONAL REQUIREMENTS ----------\n\nDo you want to include a section for the table of content?",
  },
  {
    type: "confirm",
    name: "addLicense",
    message: "Do you want to include a badge for the type of license?",
  },
  {
    type: "list",
    name: "projectTypeOfLicense",
    message: "What type of license do you want to include?",
    choices: ["Apache-2.0", "CCO-4.0", "GNU-GPL-3.0", "MIT", "Mozilla-2.0"],
    default: "MIT",
    when: function (answers) {
      return answers.addLicense;
    },
  },
  {
    type: "confirm",
    name: "addFeatures",
    message: "Do you want to include a section for features?",
  },
  {
    type: "confirm",
    name: "addContribute",
    message: "Do you want to include a section for contributions?",
  },
  {
    type: "confirm",
    name: "addTests",
    message: "Do you want to include a section for tests?",
  },
];

// Validate that the input is alpha-numeric with a lenght of 2 or more words, and at least 1 character each word
function validateAlphaNumericInput(input) {
  let message =
    "Please enter two or more words with at least one letter or digit";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z0-9]{1,}[\s]{1,}[a-zA-Z0-9]{1,}\w*/g)
      ? true
      : message;
  } else return message;
}

// Validate that the input is alphabetical with a lenght of 2 or more words, and at least 1 character each word
function validateAlphaInput(input) {
  let message = "Please enter two or more words with letters only";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z]{1,}[\s]{1,}[a-zA-Z]{1,}\w*/g)
      ? true
      : message;
  } else return message;
}

// Validate that the input is numeric with a lenght of 2 or more words, and at least 1 character each word
function validateNumericInput(input) {
  let message = "Please enter two or more words with digits only";
  if (input.length > 0) {
    return input.match(/^[0-9]{1,}[\s]{1,}[0-9]{1,}\w*/g) ? true : message;
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
