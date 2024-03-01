/**
 * Async tests with done
 */
function getPaymentTokenFromApi(success) {
    return new Promise((resolve, reject) =>{
        if (success) {
            resolve({data: 'Successful response from the API' });
        } else {
            reject();
        }
    });
}
module.exports = getPaymentTokenFromApi;
