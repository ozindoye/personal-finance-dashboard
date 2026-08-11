import TransactionForm from './components/TransactionForm'

function App() {
    const handleAddTransaction = (transaction) => {
        console.log('New transaction:', transaction)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center pt-10 mb-8">
                Personal Finance Dashboard
            </h1>

            <div className="max-w-4xl mx-auto px-4">
                <TransactionForm onAddTransaction={handleAddTransaction} />
            </div>
        </div>
    )
}

export default App