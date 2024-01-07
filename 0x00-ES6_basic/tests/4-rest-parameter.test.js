import returnHowManyArguments from '../4-rest-parameter';

it('returns correct number of args', () => {
    expect(returnHowManyArguments(10, 4, 4)).toBe(3);
})