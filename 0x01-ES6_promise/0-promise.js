/* Intro to promises in js */
function getResponseFromAPI() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = Math.random() < 0.8;
            if (success) {
                resolve('Fulfilled Promise');
            } else {
                reject('Broken Promise');
            }
        }, 1000);
    });
};

export default getResponseFromAPI;