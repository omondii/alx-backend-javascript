const express = require('express');
const bodyParser = require('body-parser');

//Express app
const app = express();
const port = 7865
//Middleware to parse json request bodies
app.use(bodyParser.json())
//Define the routes
app.get('/', (request, response) => {
    response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    const id = request.params.id;
    response.send(`Payment methods for cart: ${id}`);
  });

app.get('/available_payments', (request, response) => {
    response.send(`{payment_methods: {credit_cards: true,paypal: false}}`);
})

app.post('/login', (request, response) => {
    const {userName} = request.body;
    response.send(`Welcome ${userName}`);
})

app.listen(port, () =>{
    console.log(`API available on localhost port ${port}`)
})

module.exports = app;