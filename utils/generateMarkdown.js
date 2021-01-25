// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ![license](https://img.shields.io/badge/license-${data.license}-green.svg)

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This Source Code Form is subject to the terms of the ${data.license} License. 
  If a copy of the License was not distributed with this file, You can obtain one at https://opensource.org/licenses

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For further information please visit my GitHub page:
  https://github.com/${data.questionsGitHub}

  Or email me directly: ${data.questionsEmail}
  `;
}

module.exports = generateMarkdown;
