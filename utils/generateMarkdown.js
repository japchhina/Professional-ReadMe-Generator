// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return '![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)'
    }
    return '';
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return ('* [License](#license)'); 
      }
      return '';
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return ('## License. This project is licensed under the $(license)license.');
      }
      return '';
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  $(inquirerResponses.description)
  ## Installation
  In order to install necessary dependencies, run the following command:
  ${data.installation}
  ## Test
  In order to test run the following command:
  ${data.test}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Contact
  You can reach me at the following email address with any questions: ${data.email}
  You can also find me on GitHub at the following link: [${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
