import { useGlobalState } from "../../context/GlobalState"


export const IncomeExpenses = () => {
    
    const {transactions}= useGlobalState()
    const amounts = transactions.map(transactions => transactions.amount)
    // suma ingresos (income)
    const income = amounts
            .filter(item => item > 0) 
            .reduce((acc, item) => (acc += item), 0);
            
    // resta gastos (expense)
    const expense = amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1;
            
            
  return (
    <>
    <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>${expense}</p>
    </div>
    <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <h4>${income}</h4>
    </div>
    </>
  )
}
