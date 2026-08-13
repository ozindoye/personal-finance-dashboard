function TransactionList({ transactions, onDeleteTransaction }) {
    if (transactions.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
                No transactions yet. Add one above.
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Category</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Description</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Type</th>
                    <th className="px-4 py-3"></th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-sm">{transaction.date}</td>
                        <td className="px-4 py-3 text-sm">{transaction.category}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                            {transaction.description || '—'}
                        </td>
                        <td className={`px-4 py-3 text-sm text-right font-medium
                ${transaction.type === 'INCOME' ? 'text-green-600' : 'text-red-600'}`}
                        >
                            £{transaction.amount.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                            {transaction.type === 'INCOME' ? 'Income' : 'Expense'}
                        </td>
                        <td className="px-4 py-3 text-right">
                            <button
                                onClick={() => onDeleteTransaction(transaction.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList