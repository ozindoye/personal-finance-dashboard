import { useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import SummaryBar from './components/SummaryBar'

function App() {
    const [transactions, setTransactions] = useState([])

    const handleAddTransaction = (transaction) => {
        const newTransaction = {
            ...transaction,
            id: Date.now(),
        }
        setTransactions([newTransaction, ...transactions])
    }

    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter((t) => t.id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center pt-10 mb-8">
                Personal Finance Dashboard
            </h1>

            <div className="max-w-4xl mx-auto px-4 space-y-6">
                <SummaryBar transactions={transactions} />
                <TransactionForm onAddTransaction={handleAddTransaction} />
                <TransactionList
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                    />
            </div>
        </div>
    )
}

export default App