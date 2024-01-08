import createEmployeesObject from '../11-createEmployeesObject.js';

describe('employees object test', () => {
    it('returns an object representation', () => {
        const dptName = 'Sound';
        const employe = ['Brian', 'Eddy', 'Annet'];
        const expected = {Sound: ['Brian', 'Eddy', 'Annet']};

        expect(createEmployeesObject(dptName, employe)).toEqual(expected);
    });
})