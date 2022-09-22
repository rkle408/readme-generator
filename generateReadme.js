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
        
        ${data.contributors}
        ${data.credits}

        ## License

        This project is licensed under the terms of the ${data.license} license.

        ## Tests

        ${data.test}

        ## Questions
        
        To find my other works, please visit my GitHub profile: <${data.github}>.
        
        If you have additional questions or comments, please contact me via email here: <${data.email}>.

    `
}
// Need to add License Badge to top

 //(License is the last part in the example README, but Acceptance Criteria wants it at the top...?)



