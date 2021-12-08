// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  This application is licensed under the ${license} license.`;
  } else {
    return '';
  }
};

// renderDescription section
function renderDescription(description) {
  if (description) {
    return `## Application Description
  ${description}`;
  } else {
    return '';
  }
};

// renderInstallation section
function renderInstallation(installation) {
  if (installation) {
    return `## Application Installation
  ${installation}`;
  } else {
    return '';
  }
};

// renderUsage section
function renderUsage(usage) {
  if (usage) {
    return `## How to Use
  ${usage}`;
  } else {
    return '';
  }
};

// renderContribute section
function renderContribute(contributing) {
  if (contributing) {
    return `## Interested in Contributing?
  ${contributing}`;
  } else {
    return '';
  }
};

// renderTests section
function renderTests(tests) {
  if (tests) {
    return `## Tests
  ${tests}`;
  } else {
    return '';
  }
};

//renderGithub section
function renderGithubUser(github, profile) {
  if (github, profile) {
    return `## Github Info
  Github Username: ${github}

  Github Profile Link: ${profile}`;
  } else {
    return '';
  }
};

//renderEmail section
function renderEmail(questions) {
  if (questions) {
    return `## Contact
  If you have any questions or concerns please reach out at:
  
  [${questions}](${questions})`;
  } else {
    return '';
  }
};

//renderScreenshot
function renderScreenshot(screenshotLink, screenshotAlt) {
  if (screenshotLink, screenshotAlt) {
    return `## Screenshot
  ![${screenshotAlt}](${screenshotLink})`;
  } else {
    return '';
  }
};

//renderDeployed
function renderDeployed(link) {
  if (link) {
    return `## Deployed Application
  [${link}](${link})`;
  } else {
    return '';
  }
};

//renderBuiltWith
function renderBuiltWith(built) {
  if (built) {
    return `## Application Built With
  ${built}`;
  } else {
    return '';
  }
};
  


//renderTableOfContents
function renderTableOfContents(questions, github, profile, tests, description, installation, usage, contributing, license, built, screenshotLink, screenshotAlt, link) {
  let tableOfContents = `## Table of Contents`;
  if (description) {
    tableOfContents += `
  * [Application Description](#application-description)`
  };
  if (installation) {
    tableOfContents += `
  * [Application Installation](#application-installation)`
  };
  if (usage) {
    tableOfContents += `
  * [How to Use](#how-to-use)`
  };
  if (tests) {
    tableOfContents += `
  * [Tests](#tests)`
  };
  if (built) {
    tableOfContents += `
  * [Application Built With](#application-built-with)`
  };
  if (screenshotLink, screenshotAlt) {
    tableOfContents += `
  * [Screenshot](#screenshot)`
  };
  if (link) {
    tableOfContents += `
  * [Deployed Application](#deployed-application)`
  }
  if (contributing) {
    tableOfContents += `
  * [Interested in Contributing?](#interested-in-contributing)`
  };
  if (github, profile) {
    tableOfContents += `
  * [Github Info](#github-info)`
  };
  if (questions) {
    tableOfContents += `
  * [Contact](#contact)`
  };
  if (license) {
    tableOfContents += `
  * [License](#license)`
  };
  return tableOfContents;
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ${renderTableOfContents(data.questions, data.github, data.profile, data.tests, data.description, data.installation, data.usage, data.contributing, data.license, data.built, data.screenshotLink, data.screenshotAlt, data.link)}
  
  ${renderDescription(data.description)}
  
  ${renderInstallation(data.installation)}
  
  ${renderUsage(data.usage)}
  
  ${renderTests(data.tests)}

  ${renderBuiltWith(data.built)}
  
  ${renderScreenshot(data.screenshotLink, data.screenshotAlt)}

  ${renderDeployed(data.link)}

  ${renderContribute(data.contributing)}

  ${renderGithubUser(data.github, data.profile)}

  ${renderEmail(data.questions)}

  ${renderLicenseSection(data.license)}
  
  `;
};

module.exports = generateMarkdown;
