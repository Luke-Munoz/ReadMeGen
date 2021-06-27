// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "Title of ReadMe"



    },
    {
        type: "input",
        name: "discription",
        message: "Discription of the project"

    },

    {
        type: "input",
        name: "table",
        message: "Table of Contents"
    },
    {
        type: "checkbox",
        name: "installations",
        choices: ["fs", "npm init", "npm install Express", "ect"]
    },
    {
        type: "input",
        name: "usage",
        message: "What is the use of this project? What does it do?"
    },
    {
        type: "checkbox",
        name: "licencing",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "NONE"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed on this project?"
    },
    {
        type: "input",
        name: "socials",
        message: "Leave your email github and others here so that we can contact you if you have any questions?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(path.join(__dirname, "./output/" + fileName), generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("saved");

    });
};





// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(awnsers) {
            console.log(awnsers);
            writeToFile("ReadMe.md", awnsers)
        })
}

// Function call to initialize app
init();