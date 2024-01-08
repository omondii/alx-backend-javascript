/* Iteration in es6 */
export default function createEmployeesObject(departmentName, employees) {
    const employed = {
        [departmentName]: [...employees],   
    }
    return employed;
}