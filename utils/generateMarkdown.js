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

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
