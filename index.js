const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

function startMenu(){
    // this will contain all of our functions to ask th user about each employees role, name, id and role specific property. 
    function createManager(){
        inquirer.prompt().then(

        ).then( Roles())
    }

    function Roles(){
        
    }
    
}

startMenu()