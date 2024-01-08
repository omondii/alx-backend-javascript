export default function appendToEachArrayValue(array, appendString) {
    const result = [];
    for (let loop of array) {
        const word = appendString + loop;
        result.push(word);
    }
    return result;
}