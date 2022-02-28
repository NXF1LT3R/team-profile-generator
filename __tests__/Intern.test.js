const Intern = require('../lib/Intern');

test('create a new intern', () => {
    const intern = new Intern('Ann', 1, 'asullivan93@nonsense.com', "Hellen Keller's School for the Blind and Deaf");
    expect (intern.name).toEqual("Ann");
    expect (intern.id).toEqual(1);
    expect (intern.email).toEqual('asullivan93@nonsense.com');
    expect (intern.school).toEqual("Hellen Keller's School for the Blind and Deaf");
})