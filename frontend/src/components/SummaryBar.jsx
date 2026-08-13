function SummaryBar({ transactions }) {
    const totalIncome = transactions
        .filter((t) => t.type === 'INCOME')
        .reduce((sum, t) => sum + t.amount, 0)

    const totalExpenses = transactions
        .filter((t) => t.type === 'EXPENSE')
        .reduce((sum, t) => sum + t.amount, 0)

    const balance = totalIncome - totalExpenses

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm text-gray-500">Total Income</p>
                <p className="text-2xl font-bold text-green-600">
                    £{totalIncome.toFixed(2)}
                </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm text-gray-500">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">
                    £{totalExpenses.toFixed(2)}
                </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm text-gray-500">Balance</p>
                <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    £{balance.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default SummaryBar