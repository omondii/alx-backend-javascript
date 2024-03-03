const dm = require('../0-console');

test('Correctly displays message to stdout', () => {
    const msg = "Hello Nodejs!"
    const consoleSpy = jest.spyOn(console, 'log');
    
    dm(msg);
    expect(consoleSpy).toHaveBeenCalledWith(msg)
})