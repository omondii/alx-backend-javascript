/* Intro to arrow functions in es6
*/
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) => {
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}