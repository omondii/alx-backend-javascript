import {uploadPhoto, createUser} from './utils.js';

function handlePromises() {
    Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
        console.log("body", photoResponse.body);
        console.log("firstname", userResponse.firstName);
        console.log("lastname", userResponse.lastName);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
}

export default handlePromises;
