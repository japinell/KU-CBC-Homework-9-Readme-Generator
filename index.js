// Packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile); // WriteFile using promises instead of a callback function

// Array of questions for user input
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
    name: "projectReason",
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
  // {
  //   type: "confirm",
  //   name: "addLicense",
  //   message: "Do you want to include a badge for the type of license?",
  // },
  {
    type: "list",
    name: "projectTypeOfLicense",
    message: "What type of license do you want to include?",
    choices: [
      { value: "A2", name: "Apache 2.0 License" },
      { value: "C4", name: "Creative Commons - Attribution 4.0 International" },
      { value: "G3", name: "GNU GPL V3" },
      { value: "M", name: "The MIT License" },
      { value: "M2", name: "Mozilla Public License 2.0" },
    ],
    default: "MIT",
    validate: function (answer) {
      return answer.key;
    },
    // when: function (answer) {
    //   return answer.addLicense;
    // },
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
  {
    type: "confirm",
    name: "addContactInformation",
    message:
      "Do you want to include a section for questions, comments, or suggestions?",
  },
  {
    type: "input",
    name: "projectGitHubUsername",
    message: "Enter your GitHub account: ",
    default: "https://github.com/japinell",
    when: function (answers) {
      return answers.addContactInformation;
    },
  },
  {
    type: "input",
    name: "projectEmailAddress",
    message: "Enter your e-Mail address: ",
    validate: (answer) => {
      return validateEmailInput(answer);
    },
    when: function (answers) {
      return answers.addContactInformation;
    },
  },
  {
    type: "input",
    name: "fileName",
    message: "Enter the filename where to save the blueprint: ",
    default: "README-blueprint.md",
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

// Validate that the e-Mail address
function validateEmailInput(input) {
  let message = "Please enter a valid email address";
  if (input.length > 0) {
    return input.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : message;
  } else return message;
}

// Write the README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, generateMarkdown(data))
    .then(() => console.log(`Successfully created file ${fileName}.`))
    .catch((err) => console.error(`Error: ${err}`));
}

// Initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const fileName = answers.fileName;
    console.log(JSON.stringify(answers, null, "  "));
    writeToFile(fileName, answers);
  });
}

// Rock & Roll!
init();
