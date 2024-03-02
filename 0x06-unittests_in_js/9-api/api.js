const express = require('express');

//Express app
const app = express();
const port = 7865
//Define the routes
app.get('/', (request, response) => {
    response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart: ${id}`);
  });

app.listen(port, () =>{
    console.log(`API available on localhost port ${port}`)
})