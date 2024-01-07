/* Uses only keyname to store variables */
export default function getBudgetObject(income, gdp, capita) {
    const budget = {
        income,
        gdp,
        capita
    };
    return budget;
}