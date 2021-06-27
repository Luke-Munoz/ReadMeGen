// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![Github Licence](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {
        return "";
    }

};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);
    return `# Title ${data.title}

## description 

${data.discription}

## Table of Contents 

${data.table}

-----------------------------------------------------

## What you need to install

${data.installations}

## ${data.usage}

## Licence 

${renderLicenseBadge(data.licencing)}

## Who contributed

${data.contributors}

## Any question feel free to contact me at this:

${data.socials}`





}

module.exports = generateMarkdown;