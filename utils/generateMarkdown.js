// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.trim() === "") return "";
  switch (license) {
    case "A2":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    case "C4":
      return `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)]`;
    case "G3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case "M":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "M2":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.trim() === "") return "";
  switch (license) {
    case "A2":
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case "C4":
      return `(https://creativecommons.org/licenses/by/4.0/)`;
    case "G3":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case "M":
      return `(https://opensource.org/licenses/MIT)`;
    case "M2":
      return `(https://opensource.org/licenses/MPL-2.0)`;
  }
}

// Returns the license section
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.trim() === "") return "";
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
}

// Generate markdown for README
function generateMarkdown(data) {
  let markDownFile = `# ${data.projectTitle}\n\n`;

  // Description
  markDownFile += `## Description\n\n`;
  markDownFile += `${data.projectDescription}\n\n`;

  if (data.addContent) {
    markDownFile += `**Project Motivation** - ${data.projectMotivation}\n`;
    markDownFile += `**Project Reason** - ${data.projectReason}\n`;
    markDownFile += `**Problem Addressed** - ${data.projectProblemAddressed}\n`;
    markDownFile += `**Lessons Learned** - ${data.projectLessons}\n`;
    markDownFile += `**Project Uniqueness** - ${data.projectUniqueness}\n\n`;
  }

  // Agile
  if (data.addAgile) {
    if (data.projectUserStory.length > 0) {
      markDownFile += `### User Story\n\n`;
      markDownFile += "```\n" + data.projectUserStory + "\n";
      markDownFile += "```\n\n";
    }

    if (data.projectAcceptanceCriteria.length > 0) {
      markDownFile += `### Acceptance Criteria\n\n`;
      markDownFile += "```\n" + data.projectAcceptanceCriteria + "\n";
      markDownFile += "```\n\n";
    }
  }

  // Table of Contents
  if (data.addTableOfContent) {
    markDownFile += `## Table of Contents\n\n`;
    markDownFile += `- [Installation](#installation)\n`;
    markDownFile += `- [Usage](#usage)\n`;
    markDownFile += `- [Credits](#credits)\n`;
    markDownFile += `- [License](#license)\n\n`;

    markDownFile += `## Installation\n\n`;
    markDownFile += `Provide a step-by-step description of how to get the development environment running.\n\n`;
    markDownFile += `## Usage\n\n`;
    markDownFile += `Provide instructions and examples for use including screenshots as needed.\n\n`;
    markDownFile += `## Credits\n\n`;
    markDownFile += `List collaborators with links to their GitHub profiles.\n\n`;
    markDownFile += `## License\n\n`;
    markDownFile += `Let other developers know what they can and cannot do with your project.\n\n`;
  }

  // Features
  if (data.addFeatures) {
    markDownFile += `## Features\n\n`;
    markDownFile += `Provide product features here.\n\n`;
  }

  // Contributing
  if (data.addContribute) {
    markDownFile += `## Contributing Guidelines\n\n`;
    markDownFile += `Let other developers know how to contribute to your application or package.\n\n`;
  }

  // Tests
  if (data.addTests) {
    markDownFile += `## Test Instructions\n\n`;
    markDownFile += `Provide tests and examples of how to run your application.\n\n`;
  }

  // Contact Information
  if (data.addContactInformation) {
    markDownFile += `## Contact Information\n\n`;
    markDownFile += `For questions, comments, or suggestions, please contact me by E-Mail:\n\n`;
    markDownFile += `${data.projectEmailAddress}\n\n`;
    markDownFile += `Check out my other **cool** projects in GitHub - ${data.projectGitHubUsername}\n\n`;
  }

  // if (data.addLicense) {
  // License
  markDownFile += `## License\n\n`;
  markDownFile += `This application is licensed under the following license:\n\n`;
  markDownFile += renderLicenseSection(data.projectTypeOfLicense) + "\n\n";
  markDownFile += `For more information, please follow the link provided above.`;
  // }

  return markDownFile;
}

module.exports = generateMarkdown;
