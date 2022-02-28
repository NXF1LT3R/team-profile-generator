// this will contain the html template and templates for each employee card
// create the projects section
const generateEmployees = employeesArr => {
 const generateManager = manager => {
    return `
    <div class="col-sm-4">
    <div class="card shadow rounded">
      <div class="flex-row justify-space-between">
          <div class="container bg-primary p-2">
            <h3 class="portfolio-item-title text-light">${manager.name}</h3>
            <h3>Manager</h3>
          </div>
            <div class="container">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officenumber}</p>
            </div>
      </div>
    </div>
    </div>
  `;
 }

 const generateEngineer = engineer => {
    return `
    <div class="col-sm-4">
    <div class="card shadow rounded">
      <div class="flex-row justify-space-between">
            <div class="container bg-primary p-2">
            <h3 class="portfolio-item-title text-light">${engineer.name}</h3>
            <h3>Engineer</h3>
          </div>
          <div class="container">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
        </div>
    </div>
    </div>
  `;
 }

 const generateIntern = intern => {
    return `
    <div class="col-sm-4">
    <div class="card shadow rounded">
      <div class="flex-row justify-space-between">
          <div class="container bg-primary p-2">
            <h3 class="portfolio-item-title text-light">${intern.name}</h3>
            <h3>Intern</h3>
          </div>
          <div class="container">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
          </div>
      </div>
    </div>
    </div>
  `;
 }

const htmlArr = [];
managers = employeesArr
.filter(employee=> employee.role ==='Manager')
.map(manager => generateManager(manager))
htmlArr.push(managers)

htmlArr.push(employeesArr
    .filter(employee=> employee.role ==='Engineer')
    .map(engineer => generateEngineer(engineer))
)

htmlArr.push(employeesArr
    .filter(employee=> employee.role ==='Intern')
    .map(intern => generateIntern(intern))
)

return htmlArr.join("");

  };


module.exports = data => {
console.log("Hello")
console.log(data)
const {employees}=data
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header class="text-center bg-primary p-2">
        <h1>My Team</h1>
    </header>
      <main class="container my-5">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
      <div class="container">
      <div class="row">
        ${generateEmployees(employees)}
      </div>
      </div>
      </main>
    </body>
    </html>
    `;
  };