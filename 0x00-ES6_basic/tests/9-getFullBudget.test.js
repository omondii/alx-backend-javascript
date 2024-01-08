import getBudgetForCurrentYear from "../8-getBudgetCurrentYear";
import getFullBudgetObject from "../9-getFullBudget";

it('returns correct budget', () =>{
    const budget = getFullBudgetObject(20, 30, 10);
    const expected = '$20';
    expect(budget.getIncomeInDollars(budget.income)).toBe(expected)
})

it('returns income in euros', () => {
    const budget = getFullBudgetObject(30, 40, 50);
    expect(budget.getIncomeInDollars(budget.income)).toBe('$30')
})