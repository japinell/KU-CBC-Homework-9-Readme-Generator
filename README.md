# 09 Node.js: Professional README Generator

## Description

Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package and that follows the the Professional README Guide as a reminder of everything that a high-quality, professional README should contain.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application requires **Node.js** JavaScript Runtime and **Inquirer.js** package. Therefore, basic knowledge of Node.js is recommended. To faciliate the installation of the application, a _package.json_ file is provided with the project. Execute the following command in your console to install Inquirer:

```bash
npm i inquirer
```

## Usage

The application is invoked by using the following command:

```bash
node index.js
```

Follow the prompts noticing that some of the questions have pre-defined input values, which means that it is enough for the user to press the ENTER key to accept the default value for that input.

Press the following command in Microsoft Windows, or equivalent commands in Mac OS and Linux, to stop the execution of the application:

```bash
CTRL + C
```

A link to a walkthrough video demonstrating the application functionality is provided here.

## Credits

This application follows the [Professional Readme Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide).

## License

This project is licensed under The MIT License. Refer to https://opensource.org/licenses/MIT for more information of what you can and cannot do with this project. See contact information below if you have questions, comments, or suggestions for the project.

## Features

The application features the generation of a blueprint for a README.md file with required and optional sections. Required or basic sections and sub-sections include:

- Project title
- Project description
- Type of license (Apache, Creative Commons, GNU, MIT, and Mozilla)
- Contact information
- GitHub username
- E-Mail
- Generated file location

Optional sections and sub-sections include:

- Motivation for the project
- Why did you build the project?
- What problem does it solve?
- Lessons learned
- What makes your project stand out?
- Table of contents
- Features
- How to contribute?
- Test instructions

Although users can enter information pertaining to these sections, the application is not designed to replace a more robust editor like Visual Studio Code or Notepad++. It is highly recommended that the resulting README.md file be edited for further formatting or for including additional sections.

Future development:

- Capture text sections using a more robust user interface.

## Contributing Guidelines

Want to contribute to this project? You may clone or fork the project in GitHub. Note the licesing information below.

## Test Instructions

- Clone the repository
- Install **Inquirer.js** as follows:

```bash
npm i inquirer
```

- Run the application:

```bash
node index.js
```

## Contact Information

For questions, comments, or suggestions, please contact me by E-Mail:

japinell@yahoo.com

Check out my other **cool** projects in GitHub - https://github.com/japinell

## License

This application is licensed under the following license:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)(https://opensource.org/licenses/MIT)

For more information, please follow the link provided above.
