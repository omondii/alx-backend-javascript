// Writes to stdin
function stdin () {
    console.log('Welcome to Holberton School, what is your name?');
process.stdin.on("data", (data) => {
    const name = data.toString().trim();

    if (name) {
        console.log(`Your name is: ${name}`)
    } else {
        console.log('Error');
    }
    console.log('This important software in now closing');
    process.exit()
});
}

module.exports = stdin;
