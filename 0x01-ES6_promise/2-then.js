/* Use .then handler to catch different promise outcomes
*/
function handleResponseFromAPI(promise) {
    return promise
    .then(response => {
        console.log("Got a response from the API");
        return {status: 200, body:"Success"};
    })
    .catch(error => {
        console.log("Got a response from the API");
        return new Error();
    });
}

export default handleResponseFromAPI;
