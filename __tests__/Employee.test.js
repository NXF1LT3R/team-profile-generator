const Employee = require('../lib/Employee');

test('create a new Employee', () => {
    const employee = new Employee("Ed", "1", "eplecha87@gmail.com");
    expect (employee.name).toEqual("Ed");
    expect (employee.id).toEqual("1");
    expect (employee.email).toEqual("eplecha87@gmail.com");
})