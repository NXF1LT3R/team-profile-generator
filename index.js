const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generate-site');
const promptUser = (officeData) => {
    if (!officeData.employees) {
        officeData.employees = [];
      }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the employee's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the employee\'s ID #',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your employee\'s ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the employee\'s email address',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your employee\'s email address!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the position of this employee?",
        choices: ['Manager', 'Engineer', 'Intern' ]
      },
      {
          type: 'input',
          name: 'officenumber',
          message: 'What is the manager\'s office number?',
          validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log("Please enter the manager's office number!");
              return false;
            }
          },
          when: answers => {
              return answers.role == 'Manager'
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the engineers\'s GitHub name?',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub name!");
            return false;
          }
        }, 
        when: answers => {
            return answers.role == 'Engineer'
        }
    },
      {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        }, 
        when: answers => {
            return answers.role == 'Intern'
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
      }
    ]) .then(employeeData => {
        console.log(employeeData);
        officeData.employees.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return promptUser(officeData);
        } else {
          return officeData;
        }
      });
  };

let data = {
}

promptUser(data)
  .then(officeData => {
      console.log(officeData)
    return generatePage(officeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });