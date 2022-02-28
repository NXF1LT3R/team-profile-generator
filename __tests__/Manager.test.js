const Manager = require('../lib/Manager');

test('create a new manager', () => {
    const manager = new Manager('Ed', 1, 'eplecha87@gmail.com', "(281)330-8004");
    expect (manager.name).toEqual("Ed");
    expect (manager.id).toEqual(1);
    expect (manager.email).toEqual('eplecha87@gmail.com');
    expect (manager.officeNumber).toEqual("(281)330-8004");
})

test("test employee role", () => {
    const manager = new Manager('Ed', 1, 'eplecha87@gmail.com', "(281)330-8004");
    expect (manager.getRole()).toEqual("Manager")
})