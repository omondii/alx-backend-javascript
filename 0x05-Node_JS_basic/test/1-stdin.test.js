const stdin = require('../1-stdin');
const { spawn } = require('child_process');
const { join } = require('path');


describe('stdin input output', () =>{
    var childProcess;

    beforeEach(() => {
        childProcess = spawn('node', [join(__dirname, '1-stdin.js')]);
    });

    afterEach(() => {
        childProcess.kill();
    });

    test('outputs correct name', () => {
        const name = 'Brian';
        childProcess.stdin.write(name + '\n');
        childProcess.stdout.once('data', (data) => {
            const output = data.toString().trim();
            expect(output).toMatch(`Your name is: ${name}`);
            done();
        });
    });

    test('Error when no name is provided', () => {
        childProcess.stdin.write('\n');
        childProcess.stdout.once('data', (data) => {
            const output = data.toString().trim();
            expect(output).toMatch('Error');
            done();
        });
    });

    test('Exits after input', (done) => {
        childProcess.stdin.write('Anette\n');
        childProcess.once('exit', () => {
            done();
        });
    });
})
