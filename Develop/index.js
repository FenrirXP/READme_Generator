const inquirer=require("inquirer");


inquirer.prompt([{

    type:"input",
    name:"username",
    message:"What is your Github username?"

},{

    type:"input",
    name:"emailAddress",
    message:"What is your email address?"
},{

    type:"input",
    name:"projectName",
    message:"What is your Project Name?"
},{

    type:"input",
    name:"projectDescription",
    message:"Please write a short description"
},{

    type:"list",
    choices:["MIT","Apache 2.0","GPL 3.0","BSD 3","None"],
    name:"value",
    message:"Please choose a license"
},{

    type:"input",
    name:"installDependencies",
    message:"What command should be run to install dependencies?"

},{

    type:"input",
    name:"runTest",
    message:"What commnand should be run to run tests?"
},{
    type:"input",
    name:"userMessage",
    message:"What does the user need to know about using the repo?"
},{

    type:"input",
    name:"repoContribution",
    message:"What does the user need to know about contributing to the repo?"


}]).then(result =>{

    console.log(`${result.username} ${result.emailAddress} ${result.projectName} ${result.projectDescription} `)
    console.log(`${result.value} ${result.installDependencies} ${result.runTest} ${result.userMessage} ${result.repoContribution}`)
}) 