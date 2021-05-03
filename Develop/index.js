const inquirer=require("inquirer");
const fs=require("fs");

inquirer.prompt([{

    type:"input",
    name:"username",
    message:"What is your Github username?",
    //the validate is used so the user can't skip or accidentally hit enter and miss the question
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to enter your username"}
    }

},{

    type:"input",
    name:"emailAddress",
    message:"What is your email address?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to enter your email address"}
    }

},{

    type:"input",
    name:"projectName",
    message:"What is your Project Name?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to enter your Project Name"}
    }

},{

    type:"input",
    name:"projectDescription",
    message:"Please write a short description",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to write a short description"}
    }


},{
    //used list because it allowed me to list the following items unlike choice which gave an error when I tried to run
    //the items in the array
    type:"list",
    choices:["MIT","Apache 2.0","GPL 3.0","BSD 3","None"],
    name:"value",
    message:"Please choose a license",
   
    
},{

    type:"input",
    name:"installDependencies",
    message:"What command should be run to install dependencies?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to enter what dependency should be installed"}
    }

},{

    type:"input",
    name:"runTest",
    message:"What commnand should be run to run tests?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to enter the command to run the test"}
    }

},{
    type:"input",
    name:"userMessage",
    message:"What does the user need to know about using the repo?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to provide any helpful hints for users when using this repo"}
    }

},{

    type:"input",
    name:"repoContribution",
    message:"What does the user need to know about contributing to the repo?",
    validate: (value) => {
        if (value)
        {return true} else {return "Please make sure to let the user know about contributing to the repo"}
    }



}]).then(({
    userName,
    emailAddress,
    projectName,
    projectDescription,
    value,
    installDependencies,
    runTest,
    userMessage,
    repoContribution



   /*  console.log(`${result.username} ${result.emailAddress} ${result.projectName} ${result.projectDescription} `)
    console.log(`${result.value} ${result.installDependencies} ${result.runTest} ${result.userMessage} ${result.repoContribution}`) */
}) => {
//the "table of contents" for the read me
const tableOfContent = `# ${projectName}
*[Github] (#github)
*[Email] (#email) 
*[Installation] (#installation)
*[Description] (#description)
*[User info] (#userInfo)
*[License] (#license)
*[Contribution] (#contribution)
*[Tests] (#tests)
*[Questions] (#questions)


#Github
${userName}

##Email
${emailAddress}

##Installation
${installDependencies}

##Description
${projectDescription}

##User Info 
${userMessage}

##License
${value}

##Contribution
${repoContribution}

##Tests
${runTest}`;

})