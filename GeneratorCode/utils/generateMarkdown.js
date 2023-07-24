// Function to generate the license badge URL based on the selected license
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  switch (license) {
    case 'MIT':
      return `## License

This project is licensed under the MIT License. Click [here](https://opensource.org/licenses/MIT) to view the full license details.`;
    case 'Apache 2.0':
      return `## License

This project is licensed under the Apache License, Version 2.0. Click [here](https://opensource.org/licenses/Apache-2.0) to view the full license details.`;
    case 'GPL 3.0':
      return `## License

This project is licensed under the GNU General Public License v3.0. Click [here](https://www.gnu.org/licenses/gpl-3.0) to view the full license details.`;
    default:
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or concerns, please contact [${data.author}](${data.githubLink}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;

