/**
 * Prompts user for name and displays the passed name
 */
console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    if (name){
        console.log(`Your name is: ${name}`);
    } else {
        console.log('Error')
    }
    console.log('This important software is now closing');
    process.exit()
});
