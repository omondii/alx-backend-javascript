import getBudgetForCurrentYear from "../8-getBudgetCurrentYear";
import getFullBudgetObject from "../9-getFullBudget";

it('returns correct budget', () =>{
    const budget = getFullBudgetObject(30, 30, 10);
    expect(budget.getIncomeInDollars(budget.income)).toBe('$30');
    expect(budget.getIncomeInEuros(budget.income)).toEqual('30 euros');
})
