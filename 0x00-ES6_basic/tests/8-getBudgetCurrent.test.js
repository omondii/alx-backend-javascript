import getBudgetForCurrentYear from "../8-getBudgetCurrentYear";

it('returns budget value', () => {
    const expected = { 'income-2024': 2100, 'gdp-2024': 5200, 'capita-2024': 1090 };
    expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual(expected)
})