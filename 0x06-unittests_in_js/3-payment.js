const Utils = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalshipping) {
    const payment = Utils.calculateNumber('SUM',totalAmount, totalshipping)
    console.log(`The total is: ${payment}`)
}
module.exports = sendPaymentRequestToApi;
