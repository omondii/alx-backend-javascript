// Creates a director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}


// creates a teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// A class to implement the DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';    
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Class to implement the TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

//Interface for createEmployee function
interface createEmployeeFunc {
    (salary: number | string): Director | Teacher;
}

const createEmployee: createEmployeeFunc = (salary) => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type-predicate function
function isDirector(employee: Director | Teacher): employee is Director {
    return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher): string {
    if ('workDirectorTasks' in employee) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Test cases
/*
console.log(createEmployee(200));
console.log(createEmployee(500));
console.log(createEmployee(1000));
*/
executeWork(createEmployee(200));
executeWork(createEmployee(1000));