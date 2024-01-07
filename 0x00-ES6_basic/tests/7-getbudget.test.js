import getBudgetObject from '../7-getBudgetObject';

it('Use es6 shorthand', () => {
    const expected = { income: 400, gdp: 700, capita: 900 }
    expect(getBudgetObject(400, 700, 900)).toEqual(expected);
})