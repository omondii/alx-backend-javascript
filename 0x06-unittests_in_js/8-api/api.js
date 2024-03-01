const express = require('express');

//Express app
const app = express();
//listen for requests
app.listen(7865);
console.log('API available on localhost port 7865')

app.get('/', (request, response) => {
    response.send('Welcome to the payment system');
});
