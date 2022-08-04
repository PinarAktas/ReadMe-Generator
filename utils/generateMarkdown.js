// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
      ISC : '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      Apache : '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      Mozilla : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license) {
  return badges[license]
  } else {
  return ''  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
      ISC : '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      Apache : '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      Mozilla : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license) {
  return licenseLink[license]
  } else {
  return ''  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
      return `Licensed under the ${renderLicenseLink(license)} license`
  }else{
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
  
  # ${answers.title}
  
  ### ${answers.author}
  https://github.com/${answers.username}/${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Table of Content
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [Licence](#license)

  ## Project Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Questions

  If you have any questions about the repo, open an issue or contact Github:${answers.username} directly at : ${answers.email}.


  ## License
  ${renderLicenseSection(answers.license)}

`;
}

module.exports = generateMarkdown;
