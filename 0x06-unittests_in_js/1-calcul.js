/*
 *Performs calculations based on a passed Type
 *@type {String} A type of operation to be performed
 *@a ,b {Number} @ Numbers to be rounded and acted on
 *@Returns the result of the operation passed
 */
function calculateNumber(type, a, b){
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
        return Math.round(b) === 0 ? 'Error': Math.round(a) / Math.round(b);
    }
};
module.exports = calculateNumber;
