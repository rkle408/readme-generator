// Need to add License Badge to top

// Special Note: It will not be as readable or esthetically pleasing, but will need to align-left everything so README generates correctly.

function generateReadme(data) {
return `
# ${data.title}
    
## Description

${data.description}
    
## Table of Contents
        
[Installation](#Installation)
[Usage](#Usage)
[Contributors](#Contributors)
[License](#License)
[Tests](#Tests)
[Questions](#Questions)

## Installation
        
${data.installation}

## Usage
        
${data.usage}
        
## Contributors
        
Contributors: ${data.contributors}
Credits/Resources: ${data.credits}

## License

This project is licensed under the terms of the ${data.license} license.

## Tests

${data.test}

## Questions
        
To find my other works, please visit my GitHub profile: <https://github.com/${data.github}>.
        
If you have additional questions or comments, please contact me via email here: <${data.email}>.
`
}

// NEED to use module.exports for it to work...
module.exports = generateReadme;

