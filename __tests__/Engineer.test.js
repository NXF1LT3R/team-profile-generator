const Engineer = require('../lib/Engineer');

test('create a new engineer', () => {
    const engineer = new Engineer('Robert', 1, 'rsmith92@nonsense.com', 'NXF1LT3R');
    expect (engineer.name).toEqual("Robert");
    expect (engineer.id).toEqual(1);
    expect (engineer.email).toEqual('rsmith92@nonsense.com');
    expect (engineer.gitHub).toEqual("NXF1LT3R");
})