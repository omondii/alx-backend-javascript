const displayMessage = require('../0-console');

test('Correctly displays message', () => {

    const msg = "Hello, world!";
    const consolespy = jest.spyOn(console, 'log');

    displayMessage(msg);

    expect(consolespy).toHaveBeenCalledWith(msg);
})
